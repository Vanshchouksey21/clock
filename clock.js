setInterval(()=>{
    let show =document.querySelector("#d1");
let date = new Date ()
show.innerHTML=`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
},1000)
