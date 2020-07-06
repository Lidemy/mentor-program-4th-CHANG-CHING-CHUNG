// eslint-disable-next-line consistent-return
function searchHelper(arr, targetNum, start, end) {
  const middleIdx = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  }
  if (arr[middleIdx] === targetNum) {
    return middleIdx;
  } if (arr[middleIdx] > targetNum) {
    return searchHelper(arr, targetNum, start, middleIdx - 1);
  } if (arr[middleIdx] < targetNum) {
    return searchHelper(arr, targetNum, middleIdx + 1, end);
  }
}
function search(arr, targetNum) {
  const start = 0;
  const end = arr.length - 1;
  return searchHelper(arr, targetNum, start, end);
}


console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
