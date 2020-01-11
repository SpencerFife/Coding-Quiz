$(document).ready(function() {
  // DOM variables
  var timerEl = document.getElementById("timer");
  var startEl = document.getElementById("start");
  var startQuizEl = document.getElementById("startQuiz");
  var startQuizIntroEl = document.getElementById("startQuizIntro");
  var titleEl = document.getElementById("questionTitle");
  var choicesEl = document.getElementById("questionChoices");

  // Global variables
  var time = questions.length * 15;
  var questionIndex = 0;
  var timeId;

  // Functions
  function clockTick() {
    --time;
    timerEl.innerHTML = time;
    if (time <= 0) {
      quizOver();
    }
  }

  function startTimer() {
    timeId = setInterval(clockTick, 1000);
  }

  function stopTimer() {
    clearInterval(timerId);
  }

  function startQuiz() {
    startTimer();
    startQuizEl.style.display = "none";
    startQuizIntroEl.style.display = "none";
    startEl.style.display = "none";

    generateQuestion();
  }

  function generateQuestion() {
    var currentQuestion = questions[questionIndex];

    titleEl.innerHTML = "";
    titleEl.innerHTML = currentQuestion.title;

    choicesEl.innerHTML = "";
    var choices = currentQuestion.choices;
    for (var i = 0; i < choices.length; i++) {
      var choicesButton = document.createElement("button");
      choicesButton.innerText = choices[i];
      choicesButton.onclick = checkChoice;
      choicesEl.appendChild(choicesButton);
    }
  }

  function checkChoice() {
    var correctAnswer = questions[questionIndex].answer;
    var userAnswer = this.innerText;
    if (correctAnswer === userAnswer) {
      nextQuestion();
    } else {
      time -= 5;
      nextQuestion();
    }

    console.log(correctAnswer, userAnswer);
  }
  //checkChoice();

  function nextQuestion() {
    ++questionIndex;
    generateQuestion();
  }

  function storeScore() {}

  function quizOver() {
    stopTimer();
    console.log("game over");
  }

  //Add button onclick
  startEl.onclick = startQuiz;
});
