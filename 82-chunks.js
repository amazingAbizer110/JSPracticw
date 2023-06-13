const chunks=(arr,chunk)=>{
    for (let i=0;i<arr.length;i+=chunk){
        console.log(arr.slice(i,i+chunk))
    }
}

chunks([1,2,3,4,5,6,7,8,9,0],2)