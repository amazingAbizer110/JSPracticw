const check=(arr)=>{
    // console.log(typeof arr)
    if (Array.isArray(arr)) return true;
    return false;
};
console.log(check([10,20,30,40]))