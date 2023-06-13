const words=(s)=>{
    let words=s.split(' ');
    words.sort();
    return words.join(' ')
}
console.log(words('Abizer is the great'))