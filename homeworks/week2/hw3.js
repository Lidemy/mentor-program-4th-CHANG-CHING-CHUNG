function reverse(str) {
  let reversed = "";
  for(let i = str.length - 1; i  >= 0; i--) {
    reversed += str[i]
  }
  console.log(reversed)
  
}

reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')
reverse('hello');
