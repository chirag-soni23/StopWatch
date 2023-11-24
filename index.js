///////////////////////////////////Java Script /////////////////////////////////////////////
let seconds = "00";
let miliseconds = "00";
let mins = "00";
let getSeconds = document.querySelector("#seconds");
let getMiliseconds = document.querySelector("#miliseconds");
let getMins = document.querySelector("#mins");
let btnStart = document.querySelector("#btn-start");
let btnStop = document.querySelector("#btn-stop");
let btnReset = document.querySelector("#btn-reset");
/////////////////////////////////// Add Event Listener /////////////////////////////////////
btnStart.addEventListener("click", () => {
  interval = setInterval(starttimer, 10);
  btnStart.style.display = 'none'
});
btnStop.addEventListener("click", () => {
  clearInterval(interval);
  btnStart.style.display = 'inline'
});
btnReset.addEventListener("click", () => {
  clearInterval(interval);
  miliseconds = "00";
  seconds = "00";
  mins = "00";
  getSeconds.innerHTML = seconds;
  getMiliseconds.innerHTML = miliseconds;
  getMins.innerHTML = mins;
  btnStart.style.display = 'inline';
});
function starttimer() {
  miliseconds++;
  if (miliseconds <= 9) {
    getMiliseconds.innerHTML = "0" + miliseconds;
  }
  if (miliseconds > 9) {
    getMiliseconds.innerHTML = miliseconds;
  }
  if (miliseconds > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    miliseconds = 0;
    getMiliseconds.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds >= 60) {
    mins++;
    getMins.innerHTML = "0" + mins;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (mins >= 10) {
    getMins.innerHTML = mins;
  }
  
}

