const palindrome=(s)=>{
    let pal='';
    let [i,j]=[0,s.length-1];
    while(i<=j){
        if (s[i]!==s[j]) return 'Not a Palindrome';
        i++;
        j--;
    }
    return 'Palindrome'
}
console.log(palindrome('abcdef'))