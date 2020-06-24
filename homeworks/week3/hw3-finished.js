let arr = [5,1,2,3,4,5];

let totalNum = arr.shift();

arr.forEach(num => {
  Prime(num)
})

function Prime(n) {
  if(isPrime(n)) {
    console.log("Prime");
  } else {
    console.log("Composite");
  }
}

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
     return false;
    }
  }
  return n > 1;
}

