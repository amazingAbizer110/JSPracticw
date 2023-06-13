const check=(s,a)=>{
    if (s.includes(a)) return `String contains ${a} at  start position ${s.indexOf(a)}`;
    else return `String does not contain ${a}`;
}
console.log(check('Abizer Lohawala','Ab'))