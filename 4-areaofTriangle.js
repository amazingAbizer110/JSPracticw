// Area When Base and Height is Known
const area=(base,height)=>{
    return 0.5*base*height;
};
console.log(area(10,15))

// Area When All Sides are Known
const area2=(s1,s2,s3)=>{
    const s=(s1+s2+s3)/2;
    return (Math.sqrt(
        s*(s-s1)*(s-s2)*(s-s3)));
}
console.log(area2(10,20,20));