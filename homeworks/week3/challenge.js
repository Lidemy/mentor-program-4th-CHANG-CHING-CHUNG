// 這題的解法是在看完BFS影片後想到的一個解法，將走過的每一個節點都存起來，最後再從終點回追到起點算步數，在存節點問題上卡了許久，後來一直查Stackoverflow，查了好幾天才讓我查到如何存節點。

// Youtube上一個簡單易懂的BFS解說，連結如下
// https://youtu.be/cWNEl4HE2OE


let maze = ["10 10",
'..########',
'#........#',
'########.#',
'#........#',
'#.########',
'#........#',
'########.#',
'#........#',
'#.######.#',
'########..'];

// let lines = ["3 3",
//              ".#.",
//              "...",
//              "#.."]



function BFS(from, to, lines) {
let queue = [];
let visited = new Set();
let tree = [];

queue.push(from);

while(queue.length) {
let subTreeRoot = queue.shift();
if(!visited.has(subTreeRoot.toString())) {
visited.add(subTreeRoot.toString())
}

if(subTreeRoot.toString() === to.toString()) {
return buildPath(tree, to); 
}

for(let child of successors(subTreeRoot,lines)) {
if(!visited.has(child.toString())) {
tree[child] = subTreeRoot;
queue.push(child);
}
}
}
}            

function successors(subTreeRoot,maze) {
let connectedCell = [
[subTreeRoot[0] - 1, subTreeRoot[1]],
[subTreeRoot[0] + 1, subTreeRoot[1]],
[subTreeRoot[0] , subTreeRoot[1] - 1],
[subTreeRoot[0] , subTreeRoot[1] + 1]
];

let validCells = connectedCell.filter((cell) => {
return (cell[0] >= 0 && cell[0] < maze.length) && (cell[1] >= 0 && cell[1] < maze[0].length);
})


let successors = validCells.filter((cell) => {
return maze[cell[0]][cell[1]] != "#";
})


return successors;

}

function buildPath(tree, to) {
let path = [to];
let parent = tree[to];
while(parent) {
path.push(parent);
parent = tree[parent];
}
return path.reverse();
}


function solve(lines) {
let wAndH = lines.shift();
wAndH = wAndH.split(' ');

let [w, h] = wAndH;
w = Number(w);
h = Number(h);
console.log(BFS([0,0],[w-1, h-1],lines).length - 1)
}

solve(maze);
