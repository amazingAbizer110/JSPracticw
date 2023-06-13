// LCM using hcf 
const lcm=(num1,num2)=>{
    let hcf=1
    for(let i=2;i<=num1 && i<=num2;i++){
        if (num1%i==0 && num2%i==0){
            hcf=i
        }
    }
    return num1*num2/hcf
}


// const lcm=(num1,num2)=>{
//     let min=num1>num2 ? num1 :num2;

//     while(true){
//         if (min%num1==0 && min%num2==0) return min;
//         min++;
//     }
// }
// console.log(lcm(10,35))