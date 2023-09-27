let minutesRemaining = 10;
let secondsRemaining = 0;
let currentTime = document.getElementById("current-time");
let deleteButton = document.getElementById('deleteButton');
let startButton = document.getElementById("startButton");
let resumeButton = document.getElementById('resumeButton');
let pauseButton = document.getElementById('pauseButton');
let endTime = document.getElementById('end-time');
let timeProcedure = false;
let time;
let endHour;
let endMinutes;


    time = new Date();
    endHour = time.getHours();
    endMinutes = time.getMinutes();


    endTime.innerText = `${endHour} : ${endMinutes + 10}`;


function createTimer() {


    if (minutesRemaining === 0 && secondsRemaining === 0) {
        clearInterval(0);
        alert("Tempo esgotado");
    } else if (timeProcedure) {
        let counter = `${minutesRemaining < 10 ? ('0' + minutesRemaining) : minutesRemaining}:${secondsRemaining < 10 ? ('0' + secondsRemaining) : secondsRemaining}`;
        currentTime.innerText = counter;



        if (secondsRemaining === 0) {
            minutesRemaining--;
            secondsRemaining = 59;
        } else {
            secondsRemaining--;
        };
    };
};
setInterval(createTimer, 1000)

function startTimer() {
    if (!timeProcedure) {
        timeProcedure = true;
        createTimer();
        startButton.style.display = "none";
        deleteButton.style.display = "flex";
        pauseButton.style.display = "flex";
    } else {
        timeProcedure = false;
    }
}

function pauseFunction() {
    pauseButton.style.display = "none";
    resumeButton.style.display = "flex";
    timeProcedure = false;
}

function resumeFunction() {
    pauseButton.style.display = "flex";
    resumeButton.style.display = "none";
    timeProcedure = true;
}

function deleteTimer() {
    deleteButton.style.display = "none";
    resumeButton.style.display = "none";
    pauseButton.style.display = "none";
    startButton.style.display = "flex";
    minutesRemaining = 10;
    secondsRemaining = 0;
    createTimer();
    timeProcedure = false;

}

deleteButton.addEventListener('click', deleteTimer)
resumeButton.addEventListener('click', resumeFunction)
pauseButton.addEventListener('click', pauseFunction)
startButton.addEventListener('click', startTimer);
deleteButton.style.display = "none";
resumeButton.style.display = "none";
pauseButton.style.display = "none";

