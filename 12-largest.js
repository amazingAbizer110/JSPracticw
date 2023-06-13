// Alernate 
// m=Math.max(10,20,30);
const largest=(a,b,c)=>{
    if (a>b){
        if(a>c) return 'First'
    }
    else if (b>c) return 'Second'
    else if (c>b) return 'Third';
    else return 'equal'
}
console.log(largest(10,30,20));