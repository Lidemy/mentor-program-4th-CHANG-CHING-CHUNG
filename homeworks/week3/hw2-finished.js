const arrNum = ["5 200"];

 

function find(arr) {
    let [from, to] = arr[0].split(" ")
    from = Number(from);
    to = Number(to);
    let arrNum = createArr(from,to);

    for(let i = 0; i < arrNum.length; i++) {
        let power = arrNum[i].length;
        let splitedNum = arrNum[i].split("");
        splitedNum = splitedNum.map(s => {
            return Number(s) ** power;
        })
        let result = splitedNum.reduce((prev, curr) => prev + curr)
        let originalNum = Number(arrNum[i])

        if(originalNum === result) {
             console.log(result)
        }
    }
}

 

function createArr(from, to) {
    let arr = [];
    for(let k = from; k <= to; k++) {
        arr.push(k.toString());
    }
    return arr
}

 

find(arrNum);