const unique=(arr1,arr2)=>{
    let arr=arr1.concat(arr2)
    arr=Array.from(new Set(arr))
    return arr
}
console.log(unique([1,3,2],[1,2,5]))