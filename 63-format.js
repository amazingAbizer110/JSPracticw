const formatter=(date)=>{
    let month=date.getMonth()+1;
    let year=date.getFullYear();
    let day=date.getDate();
    if (day<10) day='0'+day;
    if (month<10) month='0'+month;
    return month + '/' + day + '/' + year;

}
console.log(formatter(new Date))