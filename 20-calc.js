const calc=(a,b,opt)=>{
    if (opt=='+') return a+b
    else if (opt=='-') return a-b 
    else if (opt=='*') return a*b
    else if (opt=='/') return a/b
    else return 'error'

}
console.log(calc(10,20,'-'))