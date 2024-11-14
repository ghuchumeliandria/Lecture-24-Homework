const days = document.getElementById("days-heading");
const hours = document.getElementById("hours-heading");
const minutes = document.getElementById("minutes-heading");
const seconds = document.getElementById("seconds-heading");

// const promptBtn = document.getElementById("prompt-btn");

let daysPrompt = parseInt(prompt("შეიყვანე დღე"));
let hoursPrompt = parseInt(prompt("შეიყვანე საათი"));
let minutesPrompt = parseInt(prompt("შეიყვანე წუთი"));
let secondsPrompt = parseInt(prompt("შეიყვანე წამი"));

function timeValue() {

  if (isNaN(daysPrompt)) {
    days.textContent = "00";
    alert("გთხოვ დღის ველში მიუთითე რიცხვი");
  } else {
    days.textContent = daysPrompt;
  }
  if (isNaN(hoursPrompt)) {
    hours.textContent = "00";
    alert("გთხოვ საათის ველში მიუთითე რიცხვი");
  } else {
    hours.textContent = hoursPrompt;
  }
  if (isNaN(minutesPrompt)) {
    minutes.textContent = "00";
    alert("გთხოვ წუთების ველში მიუთითე რიცხვი");
  } else {
    minutes.textContent = minutesPrompt;
  }
  if (isNaN(secondsPrompt)) {
    seconds.textContent = "00";
    alert("გთხოვ წამის ველში მიუთითე რიცხვი");
  } else {
    seconds.textContent = secondsPrompt;
  }

}
timeValue();

let daysInterval = setInterval(() => {
  if (secondsPrompt > 0) {
    secondsPrompt--;
  } else if (secondsPrompt === 0 && minutesPrompt >0) {
    secondsPrompt = 59;
    // secondsPrompt--;
    minutesPrompt--;
  } else if (secondsPrompt === 0 && minutesPrompt === 0 && hoursPrompt > 0) {
    secondsPrompt = 59;
    minutesPrompt = 59;
    hoursPrompt--;
  } else if (secondsPrompt === 0 && minutesPrompt === 0 && hoursPrompt === 0 && daysPrompt > 0) {
    secondsPrompt = 59;
    minutesPrompt = 59;
    hoursPrompt = 23;
    daysPrompt--;
  }else if(secondsPrompt === 0 && minutesPrompt === 0 && hoursPrompt === 0 && daysPrompt ===0){
      clearInterval(daysInterval)
  }
  else{
    clearInterval(daysInterval);
  }
  seconds.textContent = secondsPrompt;
  minutes.textContent = minutesPrompt;
  hours.textContent = hoursPrompt;
  days.textContent = daysPrompt
    
}, 1000);
