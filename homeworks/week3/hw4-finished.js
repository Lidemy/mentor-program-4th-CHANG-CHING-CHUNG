function palindromes(str) {
  let newStr = str.replace(/[^a-z]/gi,"");
  let reversedStr = [];
  for(let i = newStr.length-1; i >= 0; i--) {
    reversedStr.push(newStr[i])
  }
  reversedStr = reversedStr.join("")
  if(reversedStr === newStr) {
    console.log("True");
  } else {
    console.log("False");
  }
}

palindromes('abbbba')