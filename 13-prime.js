const prime=(num)=>{
    if (num===1 || num===2 ||num===3) return 'Prime';
    for(let i=2;i<Math.ceil(Math.sqrt(num));i++){
        if (num%i===0) return 'Composite'
    }
    return 'Prime'
}
console.log(prime(11));
