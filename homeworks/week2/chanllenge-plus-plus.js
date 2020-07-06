function multiply(a, b) {
  let resultArr = new Array(a.length + b.length).fill(0);
  for (let i = a.length; i--;) {
    let carry = 0;
    for (let k = b.length; k--;) {
      carry = Math.floor((resultArr[1 + i + k] + (Number(a[i]) * Number(b[k]))) / 10);
      resultArr[1 + i + k] = (resultArr[1 + i + k] + (Number(a[i]) * Number(b[k]))) % 10;
      resultArr[i + k] = resultArr[i + k] + carry;
    }
  }
  resultArr = resultArr.join('');
  resultArr = resultArr.replace(/^0/g, '');
  return resultArr;
}

console.log(multiply('12345', '12345'));
