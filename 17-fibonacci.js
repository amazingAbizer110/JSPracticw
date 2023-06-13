const fib=(num)=>{
    if (num<1) console.log('error')
    else if (num===1) console.log(0); 
    else if (num===2) console.log(1);
    else {
        let[one,two]=[0,1];
        let three=0
        console.log(one);
        console.log(two);
        for(let i=1;i<num;i++){
            three=one+two;
            one=two;
            two=three;
            console.log(three);
        }
    }
    
}
fib(10)