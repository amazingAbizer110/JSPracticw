const check=(arr,n)=>{
    if (arr.includes(n)) return true 
    return false 
    // if (arr.indexOf(n)!=-1) return true
    // return false
}
console.log(check([10,20,30,40],40))