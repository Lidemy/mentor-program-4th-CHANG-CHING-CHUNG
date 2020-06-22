function printStars(n) {
  if(n >= 1 && n <= 30) {
    let star = "*";
    for(let i = 0; i < n; i++) {
      console.log(star)
    }
  }
}

// printStars(1);
// printStars(3);
printStars(6);
