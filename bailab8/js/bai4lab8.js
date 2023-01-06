const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
const saverdValue = localStorage.getItem("countdown") || false;
if (saverdValue) {
  startClock(saverdValue);
  let inputValue = new Date(saverdValue);
  endDate.valueAsDate = inputValue;
}
endDate.addEventListener("change", function (e) {
  e.preventDefault();
  clearInterval(timeInterval);
  const temp = new Date(endDate.value);
  localStorage.setItem("countdown", temp);
  startClock(temp);
  timeStop = true;
});

function timeLeft(d) {
  let currentDate = new Date();
  let t = Date.parse(d) - Date.parse(currentDate);
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function startClock(d) {
  function uppdateCounter() {
    let tl = timeLeft(d);
    if (tl.total <= 0) {
      timeStop = false;
    }
    for (let pro in tl) {
      let el = clock.querySelector("." + pro);
      if (el) {
        el.innerHTML = tl(pro);
      }
    }
  }
  uppdateCounter();
  if (timeStop) {
    timeInterval = setInterval(uppdateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}
