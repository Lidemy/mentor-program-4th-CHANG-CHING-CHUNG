// 這一題是參考了一個叫演算法筆記的網站，及Youtube影片才寫出來的，所以根本不能算是我解出來的QQ
// 連結如下：
// 演算法筆記-http://www.csie.ntnu.edu.tw/~u91029/KnapsackProblem.html#3
// Youtube影片: Dynamic Programming 作者:CS Dojo-https://youtu.be/vYquumk4nWw
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
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
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// eslint-disable-next-line no-shadow
function solve(lines) {
  const processedData = dataProcessor(lines);
  const itemN = processedData.itemNum;
  const { bag } = processedData;
  const { weights } = processedData;
  const { values } = processedData;
  const tableDP = DPtableInit(itemN);
  console.log(knapsack(itemN, bag, weights, values, tableDP));
}

function dataProcessor(inputArr) {
  // eslint-disable-next-line no-unused-vars
  let [itemNum, bag] = inputArr.shift().split(' ');
  itemNum = Number(itemNum);
  bag = Number(bag);
  const weights = [];
  const values = [];
  const newArr = inputArr.map((set) => {
    let [w, v] = set.split(' ');
    w = Number(w);
    v = Number(v);
    return [w, v];
  });
  newArr.forEach((set) => {
    weights.push(set[0]);
    values.push(set[1]);
  });
  const itemLengh = values.length;
  weights.unshift(null);
  values.unshift(null);
  const data = {
    itemNum: itemLengh,
    bag,
    weights,
    values,
  };

  return data;
}

function DPtableInit(itemNum) {
  const table = [];

  for (let i = 0; i < itemNum + 1; i++) {
    table[i] = [undefined];
  }

  return table;
}


function knapsack(i, w, itemW, itemV, DPtable) {
  let result;
  if (DPtable[i][w] !== undefined) {
    return DPtable[i][w];
  }

  if (i <= 0 || w <= 0) {
    result = 0;
  } else if (itemW[i] > w) {
    result = knapsack(i - 1, w, itemW, itemV, DPtable);
  } else {
    // eslint-disable-next-line max-len
    result = Math.max(knapsack(i - 1, w, itemW, itemV, DPtable), knapsack(i - 1, w - itemW[i], itemW, itemV, DPtable) + itemV[i]);
  }
  // eslint-disable-next-line no-param-reassign
  DPtable[i][w] = result;

  return result;
}
