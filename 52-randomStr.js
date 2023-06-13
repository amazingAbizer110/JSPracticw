const random=(num)=>{
    const chars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let n=chars.length
    let res='';
    for(let i =0; i<num;i++){
        res+=chars[Math.floor(Math.random()*n)]
    }
    return res 
}
console.log(random(7))