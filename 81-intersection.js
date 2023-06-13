const intersection=(arr1,arr2)=>{
    let intersect=arr1.filter(i => arr2.indexOf(i)!==-1);
    return intersect
}
console.log(intersection([1,2,3,4,5],[2,3,4,5,6,7,8]))