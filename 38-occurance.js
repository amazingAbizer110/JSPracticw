const occur=(s,c)=>{
    count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]===c) count++;
    }
    return count
}
console.log(occur('abizer Lohawala','a'))