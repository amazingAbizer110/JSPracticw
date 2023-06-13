const remove=(arr,n)=>{
    index=arr.indexOf(n);
    if (index!=-1){
        arr.splice(index,1)
    }
    return arr
}
console.log(remove([10,20,30,40,50],50))