const check=(s,checker)=>{
    if (s.startsWith(checker)) return `String starts with ${checker}`
    else return `String not starts with ${checker}`
}
console.log(check('hello world','he'))