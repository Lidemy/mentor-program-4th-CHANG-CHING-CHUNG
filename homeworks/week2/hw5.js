function join(arr, concatStr) {
  let joinedStr = "";
  for(let i = 0; i < arr.length; i++) {
    joinedStr += String(arr[i]);
    joinedStr += concatStr;
  }

  return joinedStr
  
}

function repeat(str, times) {
  let repeatedStr = '';
  for(let i = 0; i < times; i++) {
    repeatedStr += str;
  }
  return repeatedStr
}

console.log(join([1,2,3], ''));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
