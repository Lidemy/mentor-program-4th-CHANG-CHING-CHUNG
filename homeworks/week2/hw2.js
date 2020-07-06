/* eslint-disable no-param-reassign */
function capitalize(str) {
  const condition = /^[a-z]/;
  if (condition.test(str)) {
    str = str.split('');
    str[0] = String.fromCharCode(str[0].charCodeAt() - 32);
    str = str.join('');
    return str;
  }
  return str;
}

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
