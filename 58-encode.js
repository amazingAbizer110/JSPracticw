const encode=(s)=> window.btoa(s);
const decode=(s)=> window.atob(s);
let string='Abizer Lohawala'
console.log(encode(string));
console.log(decode(string));