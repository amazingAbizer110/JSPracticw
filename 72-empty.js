const empty=(arr)=>{
    // arr.splice(0,arr.length)
    arr.length=0
    // arr=[]
    return arr
}
console.log(empty([10,20,30,40]))