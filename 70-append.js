const append=(arr,object,index)=>{
    arr.splice(index-1,0,object)
    return arr
}
const obj={
    'name':'Abizer Lohawala',
    'age':21,
    'gender':'male',
    'hobbies':['coding','reading','mobile gaming']
}
console.log(append([10,20,53,54,55],obj,3))