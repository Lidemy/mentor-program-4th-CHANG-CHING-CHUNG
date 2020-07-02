/* eslint-disable max-len */
// 這題的解法是在看完BFS影片後想到的一個解法，將走過的每一個節點都存起來，最後再從終點回追到起點算步數，在存節點問題上卡了許久，後來一直查Stackoverflow，查了好幾天才讓我查到如何存節點。

// Youtube上一個簡單易懂的BFS解說，連結如下
// https://youtu.be/cWNEl4HE2OE

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  // eslint-disable-next-line no-use-before-define
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

function solve(data) {
  function successors(subTreeRoot, maze) {
    const connectedCell = [
      [subTreeRoot[0] - 1, subTreeRoot[1]],
      [subTreeRoot[0] + 1, subTreeRoot[1]],
      [subTreeRoot[0], subTreeRoot[1] - 1],
      [subTreeRoot[0], subTreeRoot[1] + 1],
    ];

    const validCells = connectedCell.filter(cell => (cell[0] >= 0 && cell[0] < maze.length) && (cell[1] >= 0 && cell[1] < maze[0].length));


    const successors1 = validCells.filter(cell => maze[cell[0]][cell[1]] !== '#');


    return successors1;
  }

  function buildPath(tree, to) {
    const path = [to];
    let parent = tree[to];
    while (parent) {
      path.push(parent);
      parent = tree[parent];
    }
    return path.reverse();
  }

  function BFS(from, to, inputmaze) {
    const queue = [];
    const visited = new Set();
    const tree = [];

    queue.push(from);

    while (queue.length) {
      const subTreeRoot = queue.shift();
      if (!visited.has(subTreeRoot.toString())) {
        visited.add(subTreeRoot.toString());
      }

      if (subTreeRoot.toString() === to.toString()) {
        return buildPath(tree, to);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const child of successors(subTreeRoot, inputmaze)) {
        if (!visited.has(child.toString())) {
          tree[child] = subTreeRoot;
          queue.push(child);
        }
      }
    }
  }

  function ans(maze) {
    let wAndH = maze.shift();
    wAndH = wAndH.split(' ');

    let [w, h] = wAndH;
    w = Number(w);
    h = Number(h);
    console.log(BFS([0, 0], [w - 1, h - 1], maze).length - 1);
  }

  ans(data);
}
