const readline = require("readline-sync");
const randomnum=()=>{
    const rand = Math.floor(Math.random() * 10) + 1;
    let guess=Number(readline.question('Guess the number '))
    while (guess!=rand){
        guess=Number(readline.question('Guess the number '))

    }
    console.log('Your guess is correct')
    

}
randomnum()