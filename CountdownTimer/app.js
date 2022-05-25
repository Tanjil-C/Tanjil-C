const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const eidAlFitr = "1 May 2022";

function countdown(){
    const eidAlFitrDate = new Date(eidAlFitr);
    const currentDate = new Date();

    const totalSeconds = (eidAlFitrDate - currentDate) /  1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    if (time < 10){
        time = "0" + time;
        return time
    }
    else{
        return time
    }
}

countdown();

setInterval(countdown, 1000);
