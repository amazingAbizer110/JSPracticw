const recursion=(num)=>{
    if (num>0){
        return num+recursion(num-1);
    }
    else return num;
}

console.log(recursion(200))