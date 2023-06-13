const armstrong=(num)=>{
    const n=num.toString().length ;
    let temp=parseInt(num)
    let sum=0
    for(let i=n;i>0;i--){
        let remain=temp%10;
        sum+=remain**n;
        temp=parseInt(temp/10);


    }
    if (sum===parseInt(num)) return true
    else return false

}
const armInterval=(start,end)=>{
    let arr=[]
    for(let i=start;i<=end; i++){
        if (armstrong(i)==true) arr.push(i)

    }
    return arr

}
console.log(armInterval(8,500))