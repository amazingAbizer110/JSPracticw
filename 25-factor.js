const factor=(num)=>{
    arr=[]
    for (let i=1;i<=num;i++){
        if (num%i===0) arr.push(i)
    }
    return arr

}
console.log(factor(12))