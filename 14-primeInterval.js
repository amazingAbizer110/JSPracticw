const prime=(num)=>{
    if (num===1 || num===2 ||num===3) return 'Prime';
    for(let i=2;i<Math.ceil(Math.sqrt(num));i++){
        if (num%i===0) return 'Composite'
    }
    return 'Prime'
}


const primeRange=(start,end)=>{
    let arr=[]
    for(let i=start;i<=end;i++){
        res=prime(i)
        if (res==='Prime') arr.push(i)

    }
    return arr
}
console.log(primeRange(11,23))