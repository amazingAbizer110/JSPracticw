const quadratic=(a,b,c)=>{
    let r1=(-b+ Math.sqrt((b*b)-4*a*c))/2*a;
    let r2=(-b- Math.sqrt((b*b)-4*a*c))/2*a;
    return [r1,r2];


}
console.log(quadratic(1,6,5));