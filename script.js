//your JS code here. If required.

function updateTime(){

const res = document.getElementById("timer");

const full = new Date();

let curDate = full.getDate();
let curMonth = full.getMonth() + 1;
const curYear = full.getFullYear();

let curHr = full.getHours();
let curMin = full.getMinutes();
let curSec = full.getSeconds();

let ampm = "AM";

if(curHr >= 12){
    curHr = curHr - 12;
    ampm = "PM";
}

console.log(curDate, curMonth, curYear);
console.log(curHr, curMin, curSec);

if(curMonth < 10){
    curMonth = `0${curMonth}`;
}

if(curMin < 10){
    curMin = `0${curMin}`;
}

if(curSec < 10){
    curSec = `0${curSec}`;
}

if(curHr < 10){
    curHr = `0${curHr}`;
}

if(curDate < 10){
    curDate =  `0${curDate}`;
}

const fullRes = `${curMonth}/${curDate}/${curYear}, ${curHr}:${curMin}:${curSec} ${ampm}`;

res.innerText = fullRes;

}

setInterval(updateTime, 1000);

