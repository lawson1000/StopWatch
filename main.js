let hour,
timer,
minutes,
seconds,
interval;

let getSeconds = 0,
    getMinutes =0,
    getHours =0;

function stopwatch(){
    this.start = function(){
        hour = document.getElementById("hours");
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
    }
}