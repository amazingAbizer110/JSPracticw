const hcf=(num1,num2)=>{
    let gcd=1
    for (let i=2;i<=num1 && i<=num2; i++){
        if (num1%i==0 && num2%i==0){
            gcd=i;
        }
    }
    return gcd

}
console.log(hcf(10,20))