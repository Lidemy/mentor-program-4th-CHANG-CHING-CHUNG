/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
function add(a, b) {
  let carry = 0;
  while (b) {
    carry = a & b;
    a ^= b;
    b = carry << 1;
  }
  return a;
}

console.log(add(10, 8));
