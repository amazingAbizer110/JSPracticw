const extract=(arr,prop)=>{
    let value=arr.map(items=>items[prop])
    return value 
}
const array=[{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
console.log(extract(array,'b'))