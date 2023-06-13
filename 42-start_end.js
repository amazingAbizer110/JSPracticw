// checking if string starts with S and ens with G 
const check=(s)=>{
    if (s.startsWith('S') && s.endsWith('g')) return 'The string starts with S and ends with G'
    else if(s[s.length-1]==='G') return 'The string not started with S and ends with G'
    else if(s[0]==='S') return 'The string started with S and not ended with G'
    else return 'The string not started with S and not ended with G'
}
console.log(check('String'))