const unique=(arr)=>{
    let unique = [];
    
    // loop through array
    for(let i of arr) {
        if(unique.indexOf(i) === -1) {
            unique.push(i);
        }
    }
    return unique
}
console.log(unique([1,1,1,2,2,3,3,4,4,5,6]))



// program to remove duplicate value from an array

// function getUnique(arr){

//     removing duplicate
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];

// calling the function
// getUnique(array);