const check=(num)=>{
    if(num>0){
        return "Positive";
    }
    else if (num<0){
        return "Negative";
    }
    else{
        return 'zero';
    }
};
console.log(check(100))