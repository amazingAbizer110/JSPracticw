const cd=new Date().getTime()+24*60*60*1000;
const interval=setInterval(()=>{
    let current=new Date().getTime()
    let timeLeft=cd-current

    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // clearing countdown when complete
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
},2000);