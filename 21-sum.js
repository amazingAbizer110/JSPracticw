const sum=(num)=>{
    let i;
    let sum=0;
    for(i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
console.log(sum(100));