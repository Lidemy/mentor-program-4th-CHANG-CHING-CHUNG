function add(a, b){
    let carry = 0;
    while(b) {
        carry = a & b;
        a = a ^ b;
        b = carry << 1
    }
    return a;
}

console.log(add(10,8));