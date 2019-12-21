var clearHighscoreButton;
var submitHighscoreButton;
var viewHighscores;
var secondsElapsed;
var storedScores;
var inputInitials;
var totalSeconds = document.getElementById("countdown").textContent;

function startQuiz() {
  document.startButton.addEventListener("click", countdownTimer(){

});
}
startQuiz();
console.log(startQuiz);

function countdownTimer() {
  var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}
countdownTimer();
console.log(countdownTimer);

function addTime() {
  addTime = secondsElapsed + 15;
}
addTime();
console.log(addTime);

function removeTime() {
  removeTime = secondsElapsed - 5;
}
removeTime();
console.log(removeTime);

function isCorrectAnswer() {
  if (userAnswer) {
    userAnswer === answer;

    addTime();
  } else {
    userAnswer !== answer;

    removeTime();
  }
}
isCorrectAnswer();
console.log(isCorrectAnswer);

function storeScore() {}
