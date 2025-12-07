let timer;
let isTenSeconds = false;
function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let timeRemaining = Number(input);

  const isTenSeconds = timeRemaining === 10;
  clearInterval(timer); // clear any previous interval
  updateDisplay(timeRemaining); // display in mm:ss

  timer = setInterval(() => {
    timeRemaining--;

    updateDisplay(timeRemaining);
  
    // when timer reaches 0
  if (timeRemaining <= 0) {
    clearInterval(timer);

    if(isTenSeconds) {
      
    document.body.style.backgroundColor = "yellow";
    }
    playAlarm();
  }
}, 1000); // 1000ms = 1 second
}

function updateDisplay(time) {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  document.getElementById("timeRemaining").innerText =
  `Time Remaining: ${minutes}:${seconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
