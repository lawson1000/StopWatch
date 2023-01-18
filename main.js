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

    if(getSeconds >= 0){
        getSeconds++;
        seconds.innerHTML = getSeconds
    }
    if(getSeconds < 10){
        seconds.innerHTML = "0" + getSeconds;
    }
    if(getSeconds >= 60){
        getSeconds=0;
        getMinutes++;
        minutes.innerHTML = "0" + getMinutes;
    }
    if(getMinutes < 10){
        minutes.innerHTML = "0" + getMinutes+ ":";
    }
    if(getMinutes >= 60){
        getMinutes=0;
        getHours++
        hour.innerHTML = "0" + getHours;
    }
    if(getHours < 10){
        hour.innerHTML = "0" + getHours+ ":";
    }
    interval = setTimeout(object.start,1000)
}
// pause
this.pause =function(){
    clearTimeout(interval);
}
this.reset =function(){
    if(getSeconds >= 0){
        getSeconds =0;
        getHours =0;
        getMinutes=0;

        seconds.innerHTML= "0" + getSeconds
        minutes.innerHTML= "0" + getMinutes + " :"
        hour.innerHTML = "0" + getHours + " :"
        clearTimeout(interval);
    }
}
}
let object = new stopwatch();