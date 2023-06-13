const fact=(num)=>{
    if(num==0) return 1
    if (num==1) return num
    
    else return num*fact(num-1)
}
console.log(fact(5))