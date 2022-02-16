var acc = 0;
var base = 0;
var current = 0;
var started = false;
var intervalId;
const culture = "en-US";
const options = { minimumIntegerDigits: 2, useGrouping: false };

function display() {
    var ms = acc + current;
    var hour = Math.floor(ms / 3600000);
    ms -= hour * 3600000;
    var minutes = Math.floor(ms / 60000);
    ms -= minutes * 60000;
    var seconds = Math.floor(ms / 1000);
    document.getElementById("time")
        .innerHTML = hour.toLocaleString(culture, options) + ":" +
        minutes.toLocaleString(culture, options) + ":" +
        seconds.toLocaleString(culture, options);
}

function enableControls() {
    if (started) {
        document.getElementById("start").setAttribute("disabled", "");
        document.getElementById("stop").removeAttribute("disabled", "");
    }
    else {
        document.getElementById("start").removeAttribute("disabled", "");
        document.getElementById("stop").setAttribute("disabled", "");
    }
    if ((acc + current) > 0) {
        document.getElementById("reset").removeAttribute("disabled", "");
    }
    else {
        document.getElementById("reset").setAttribute("disabled", "");
    }
}

function start() {
    if (!started) {
        acc += current;
        base = Date.now();
        started = true;
        enableControls();
        intervalId = window.setInterval(function () {
            current = Date.now() - base;
            enableControls();
            display();
        }, 1000);
    }
}

function stop() {
    if (started) {
        started = false;
        enableControls();
        window.clearInterval(intervalId);
    }
}

function reset() {
    acc = 0;
    current = 0;
    base = Date.now();
    enableControls();
    display();
}
