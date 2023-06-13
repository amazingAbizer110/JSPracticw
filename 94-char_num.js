const alpha_num='abcdefghijklmnopqrstuvwxyz0123456789'
const generate=(a,b)=>{
    if (alpha_num.indexOf(a)>alpha_num.indexOf(b)) return -1
    let n=alpha_num.indexOf(a)
    let m=alpha_num.indexOf(b)
    let s=''
    for(let i=n;i<=m;i++) s+=alpha_num[i]
    return s
    

}
console.log(generate(9,1))