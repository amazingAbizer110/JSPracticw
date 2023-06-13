const convertor=(num)=>{
    let binary=''
    while(num!=0){
        binary+=(num%2).toString();
        num=num%2===0 ? num/2 :(num-1)/2;

    }

    let binary_rev=''
    for(let i=binary.length-1;i>-1;i--){
        binary_rev+=binary[i];
    }
    return binary_rev

}
console.log(convertor(10))