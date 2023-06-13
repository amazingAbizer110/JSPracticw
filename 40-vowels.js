const vowels=(s)=>{
    let count=0
    for(let i of s.toLowerCase()){
        if(['a','e','i','o','u'].includes(i)) count++;
    }
    return count
}
console.log(vowels('Abizer Lohawala'))