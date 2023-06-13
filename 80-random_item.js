const random=(arr)=>{
    return arr[Math.floor(Math.random()*arr.length)]
}
console.log(random([1,2,3,4,'Hello']))