// const swap=(a,b)=>{
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     return [a,b];
// };
// console.log(swap(15,20));

const swap=(a,b)=>{
    
    return [a,b]=[b,a];
};
console.log(swap(15,20));