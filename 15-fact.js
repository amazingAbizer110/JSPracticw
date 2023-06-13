const fact=(num)=>{
    if (num<0) return 'Error'
    else if (num===0) return 1
    else {
        res=1
        for(let i=num;i>0;i--){
            res*=i;
        }
        return res;
    }
}
console.log(fact(-1));