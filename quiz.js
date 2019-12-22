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
    if (time === 0) {
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
    // Create a loop for each question choice
    // For each choice, document create a button
    // Add a class to the button that equals its text
    // Add a class to define each button (question-choice)
    // Add text to each button = ('i' + '. ' + choices)
    // Add click function to each button
    // Append button to div
  }

  function clickButton() {
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
