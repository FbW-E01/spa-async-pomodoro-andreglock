//Your code goes here!
const minLeft = document.querySelector("span.mins");
const secLeft = document.querySelector("span.secs");
const timeLeft = document.getElementById("time");
const plusButton = document.getElementById("btn-plus");
const minusButton = document.getElementById("btn-minus");
const start = document.getElementById("btn-start");
const stopButton = document.getElementById("btn-pause");
const resetButton = document.getElementById("btn-reset");
const continueButton = document.getElementById("btn-continue");

plusButton.addEventListener("click", () => {
    timeLeft.value++;
    setTimer();
});
minusButton.addEventListener("click", () => {
    timeLeft.value--;
    setTimer();
});

function setTimer() {
    minLeft.innerText = `${Math.floor(timeLeft.value)}`;
    secLeft.innerText = (timeLeft.value * 60 % 60).toFixed(1);
}

let timerID = "";
let running = false;
let timePaused = "";
let timerPaused = false;

function startTimer(timeValue) {
    if (running === false && timerPaused === false) {
        running = true;
        timerID = setInterval(() => {
            timeValue = timeValue - (1/600);
            minLeft.innerText = `${Math.floor(timeValue)}`;
            secLeft.innerText = (timeValue * 60 % 60).toFixed(1);
            timePaused = timeValue;
            if (timeValue <= 0) {
                minLeft.innerText = '0';
                secLeft.innerText = '0';
                clearInterval(timerID);
            }
        }, 100)
    } else {
        return;
    }
};

function stopTimer() {
    if (running === true) {
        clearInterval(timerID);
        running = false;
        timerPaused = true;
    }
}

function continueTimer() {
    if (running === false) {
        timerPaused = false;
        startTimer(timePaused);
    }
}

start.addEventListener("click", () => startTimer(timeLeft.value));
stopButton.addEventListener("click", () => stopTimer());
continueButton.addEventListener("click", () => continueTimer());
resetButton.addEventListener("click", () => {
    if (running === false) {
        timePaused = timeLeft.value;
        minLeft.innerText = `${Math.floor(timeLeft.value)}`;
        secLeft.innerText = (timeLeft.value * 60 % 60).toFixed(1);
        timerPaused = false;
    }
});

