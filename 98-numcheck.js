const check=(num)=>{
    if (typeof num==='number' && !isNaN(num)){
        if(Number.isInteger(num)) return 'integer';
        else return 'float';
    }
    else return 'not a number'
}
console.log(check(100))