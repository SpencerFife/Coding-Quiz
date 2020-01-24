$(document).ready(function() {
  // DOM variables
  var timerEl = document.getElementById("timer");
  var startEl = document.getElementById("start");
  var startQuizEl = document.getElementById("startQuiz");
  var startQuizIntroEl = document.getElementById("startQuizIntro");
  var titleEl = document.getElementById("questionTitle");
  var choicesEl = document.getElementById("questionChoices");
  var mainEl = document.getElementById("main");

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
    clearInterval(timeId);
  }

  function startQuiz() {
    startTimer();
    startQuizEl.style.display = "none";
    startQuizIntroEl.style.display = "none";
    startEl.style.display = "none";

    generateQuestion();
  }

  function generateQuestion() {
    console.log(questionIndex, questions.length);
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

  function nextQuestion() {
    console.log("nextQuestion", questionIndex === questions.length);
    ++questionIndex;
    if (questionIndex === questions.length) {
      quizOver();
    } else {
      generateQuestion();
    }
  }

  //quiz over

  function storeScore() {}

  function quizOver() {
    stopTimer();
    mainEl.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "All Done!";
    var finalScore = document.createElement("p");
    finalScore.innerHTML = "Your final score is " + timerEl.innerHTML;
    var label = document.createElement("label");
    label.innerHTML = "Enter Initials: ";
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    var buttonDiv = document.createElement("div");
    buttonDiv.classList.add("input-group-append");
    buttonDiv.append(submitButton);
    var inputField = document.createElement("input");
    //inputField.setAttribute(); //inside (): type, text. then new inputField.setAttribute(): class, etc...

    var parentDiv = document.createElement("div");
    parentDiv.append(label, inputField, buttonDiv);
    mainEl.append(title, finalScore, parentDiv);
    console.log("game over");
  }

  //Add button onclick
  startEl.onclick = startQuiz;
});
