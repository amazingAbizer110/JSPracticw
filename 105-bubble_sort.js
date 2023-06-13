// Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing.

// How Bubble-sort works?
// We have an unsorted array arr = [ 1, 4, 2, 5, -2, 3 ], and the task is to sort the array using bubble sort in ascending order.

// Bubble sort compares the element from index 0 and if the 0th index value is greater than 1st index value, then the values get swapped and if the 0th index value is less than the 1st index value, then nothing happens.

// Next, the 1st index value compares to the 2nd index value, and then the 2nd index value compares to the 3rd index value, and so on…

const sort=(arr)=>{
    let i,j
    for (i=0;i<arr.length;i++){
        for (j=0;j<arr.length-i-1;j++){
            if (arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp 
            }
        
        }
    // console.log(arr)
    }
    return arr
}
console.log(sort([5,10,6,8,7,2,3,1]))