const comparison=(s1,s2)=>{
    if (s1.toUpperCase()===s2.toUpperCase()) return 'equal';
    else return 'not equal'
}
console.log(comparison('Abizer Lohawala','ABIZER LOHAWALA'))

// program to perform case insensitive string comparison

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

// const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

// if(result == 0) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }