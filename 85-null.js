const nullValue=(v)=>{
    if (v==null || typeof v =='undefined') return 'null value'
    return 'not null'
}
console.log(nullValue(null))
console.log(nullValue(1))
console.log(nullValue('undefined'))