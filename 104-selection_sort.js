// selection sort 
const sort=(arr)=>{
    // base case
    if (arr.length==1) return arr  

    // Running first loop to traverse in array 
    for (let i=0;i<arr.length-1;i++){

        // running second loop to check for smallest value 
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            // Swapping values if smaller values are found 

            if (arr[minIndex]>arr[j]) minIndex=j

                       
            
        }
        let temp=arr[minIndex]
        arr[minIndex]=arr[i]
        arr[i]=temp

     
        // console.log(arr)
    }
    return arr
}

console.log(sort([9,1,3,5,4,2,7,9,6]))



