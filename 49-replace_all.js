const replace=(s,a,b)=>{
    return s.split(a).join(b)
}
console.log(replace('Mr red has a red house and a red car','red','blue'))