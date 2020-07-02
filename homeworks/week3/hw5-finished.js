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
  const lines1 = data.map((item) => {
    const item1 = item.split(' ');
    const item2 = item1.map((s) => {
      // eslint-disable-next-line no-undef
      const s1 = BigInt(s);
      return s1;
    });
    return item2;
  });


  const m = lines1.shift();
  if (m >= 1 && m <= 50) {
    for (let i = 0; i < m; i += 1) {
      const [a, b, k] = lines1[i];
      // eslint-disable-next-line no-undef
      const n1 = BigInt(1);
      // eslint-disable-next-line no-undef
      const n2 = BigInt(-1);
      if (k === n1) {
        if (a === b) {
          console.log('DRAW');
        } else {
          const win = a > b ? 'A' : 'B';
          console.log(win);
        }
      } else if (k === n2) {
        if (a === b) {
          console.log('DRAW');
        } else {
          const win = a < b ? 'A' : 'B';
          console.log(win);
        }
      } else {
        // eslint-disable-next-line no-continue
        continue;
      }
    }
  }
}
