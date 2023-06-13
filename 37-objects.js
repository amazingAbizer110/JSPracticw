// way 1
// const person = { 
//     name: 'Abizer',
//     age: 21,
//     hobbies: ['reading', 'cricket', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };

// console.log(typeof person);object
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);


//  way2
// const person = new Object ( { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// });

// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

way3


function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);