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
// eslint-disable-next-line no-shadow
function solve(lines) {
  function find(arr) {
    let [from, to] = arr[0].split(' ');

    from = Number(from);

    to = Number(to);

    // eslint-disable-next-line no-use-before-define
    const arrNum = createArr(from, to);


    for (let i = 0; i < arrNum.length; i++) {
      const power = arrNum[i].length;

      let splitedNum = arrNum[i].split('');

      splitedNum = splitedNum.map(s => Number(s) ** power);

      const result = splitedNum.reduce((prev, curr) => prev + curr);

      const originalNum = Number(arrNum[i]);


      if (originalNum === result) {
        console.log(result);
      }
    }
  }


  function createArr(from, to) {
    const arr = [];

    for (let k = from; k <= to; k++) {
      arr.push(k.toString());
    }


    return arr;
  }
  find(lines);
}
