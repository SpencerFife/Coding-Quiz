var clearHighscoreButton;
var submitHighscoreButton;
var viewHighscores;
var secondsElapsed;
var storedScores;
var inputInitials;
var totalSeconds = document.getElementById("countdown").textContent;

function startQuiz() {
  document.startButton.addEventListener("click", countdownTimer);
  console.log();
}

function countdownTimer() {
  var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
  console.log();
}

function addTime() {
  addTime = secondsElapsed + 15;
  console.log();
}

function removeTime() {
  removeTime = secondsElapsed - 5;
  console.log();
}

function isCorrectAnswer() {
  if (userAnswer) {
    userAnswer === answer;

    addTime();
  } else {
    userAnswer !== answer;

    removeTime();
  }
  console.log();
}

function storeScore() {}
