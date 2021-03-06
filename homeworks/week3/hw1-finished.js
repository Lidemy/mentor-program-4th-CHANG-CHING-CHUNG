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
  const n = Number(data[0]);

  function printStar(num) {
    let star = '';
    for (let i = 0; i < num; i += 1) {
      star += '*';
      console.log(star);
    }
  }
  printStar(n);
}
solve(lines);
