const insert=(arr,element,index)=>{
    //splice(index,no.of items to remove,element to be inserted)
    arr.splice(index-1,0,element);
    return arr
}
console.log(insert([10,20,30,40,50],60,3))