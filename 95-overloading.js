function sum(){
    if (arguments.length===0) return 'no arguments passed'
    else if(arguments.length===1) return 'Pass atleast two arguments'
    else {
        let sum=0
        for(let i=0; i<arguments.length; i++){
            sum+=arguments[i]
        }
        return sum 
    }
}
console.log(sum())
console.log(sum(1))
console.log(sum(1,2,3))