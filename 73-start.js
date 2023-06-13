const add=(arr,e)=>{
    arr.unshift(e)
    // arr.splice(0,0,e)
    // arr=[e,...arr]
    // arr=[e].concat(arr)
    return arr
}
console.log(add([10,20,30,40],53))