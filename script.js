let timer = 60;
let score = 0;
let hitRandomNumer = 0;
function increaseScore() {
  score += 10;

  document.querySelector("#scoreValue").textContent = score;
}

function getNewHit() {
  hitRandomNumer = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitRandomNumer;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 80; i++) {
    let randomNumer = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumer}</div>`;
  }

  document.querySelector("#p-bottom").innerHTML = clutter;
}

function runTimer() {
  let inervalTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(inervalTimer);
      document.querySelector(
        "#p-bottom"
      ).innerHTML = `<h1>Game Over <br> Score ${score}</h1>`;
    }
  }, 1000);
}

document
  .querySelector("#p-bottom")
  .addEventListener("click", function (details) {
    let clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitRandomNumer) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

runTimer();
makeBubble();
getNewHit();
