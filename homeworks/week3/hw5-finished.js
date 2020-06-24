let lines = ["3","1 2 1", "1 2 -1", "2 2 1"];

solve(lines)

function solve(lines) {

  lines = lines.map(item => {
      item = item.split(' ');
      item = item.map(s => {
           s = BigInt(s);
          return s;
      })
      return item;
   })

   let m = lines.shift();

   if(m >= 1 && m <= 50) {
    for(let i = 0; i < m; i++) {
        let [a, b, k] = lines[i];
        if(k === 1n) {
            if(a === b) {
                console.log('DRAW');
              } else {
                  let win = a > b ? "A" : "B";
                  console.log(win);
              }
            
              
          } else if(k === -1n) {
              if(a === b) {
                  console.log('DRAW');
              } else {
                  let win = a < b ? "A" : "B";
                  console.log(win);
              }
          } else {
              continue
        }
    }
       
   }

}