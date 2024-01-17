let quizQuestions = [

  {

    question: "Values made up of text & can contain letters, numbers, symbols, punctuation, & even emojis are called:",
    choices: ["string", "methods", "functions", "text messages"],
    answer: "string",
  },

  {

    question: "This property keeps track of how many characters it has:",
    choices: ["string", "length", "slice", "semi-colon"],
    answer: "length",

  },


  {
    question: "In Javascript, these are variables that contain multiple data values and use keys to name values:",
    choices: ["functions", "methods", "data", "objects"],
    answer: "objects",
  },

  {

    question: "This is the word for functions when they are stored as a property within a JavaScript object:",
    choices: ["media query", "methods", "functions", "event listeners"],
    answer: "methods",
  },

  {

    question: "If a condition is true, this conditional statement is used to specify execution for a block of code:",
    choices: ["if", "while", "if else", "none of these"],
    answer: "if",

  },
  {
    question: "This conditional statement specifies a new test if the first condition is false:",
    choices: ["if else", "while", "for loop", "when"],
    answer: "if else",
  },

  {

    question: "A function must be what in order to call it:",
    choices: ["declared", "imagined", "enabled", "run"],
    answer: "declared",
  },

  {
    question: "A boolean value is a value that can be either:",
    choices: ["number or letter", "true or false", "right or wrong", "all of these"],
    answer: "true or false",
  },

  {

    question: "This Javascript function is used to detect events, such as a user's mouse click, and then responds accordingly:",
    choices: ["event detectors", "movement listener", "event listener", "none of these"],
    answer: "event listener",
  },

  {

    question: "Javascript’s querySelector() method does which of the following:",
    choices: ["grabs an element", "creates a query", "initiates a function", "runs a loop"],
    answer: "grabs an element",

  },
]

// Global variables

let currentQuestionIndex = 0;
let quizContainer = document.getElementById("quiz-container");
let startButton = document.getElementById("begin-quiz");
let choicesDisplay = document.getElementById("choices");
let timerText = document.getElementById("timer");
let timer = 60;
let scoreBoardEl = document.getElementById("scoreboard");
let scoreBoard = 0;
let finalscoreEl = document.querySelector(".finalscore");


function startQuiz() {
  startButton.style.display = "none";
  setTime();
  getQuestions();
}

function getQuestions() {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionDisplay = document.getElementById("questions");
  questionDisplay.innerText = currentQuestion.question;

  choicesDisplay.innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    let answerButton = document.createElement("button");
    answerButton.setAttribute("class", "choice");
    answerButton.setAttribute("value", choice);

    answerButton.textContent = choice;

    answerButton.onclick = questionClick;

    choicesDisplay.appendChild(answerButton);
  });
}

function questionClick() {
  if (this.value !== quizQuestions[currentQuestionIndex].answer) {
    timer -= 5;

    if (timer < 0) {
      timer = 0;
    }
    timerText.textContent = timer;
  } else {
    scoreBoard += 100;
    scoreBoardEl.textContent = scoreBoard;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === quizQuestions.length) {
    goToHighScores();
  } else {
    getQuestions();
  }
}

function setTime() {
  let timerInterval = setInterval(function () {
    timer--;
    timerText.textContent = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
      goToHighScores();
    }
  }, 1000);
}

function goToHighScores() {
  let finalscore = scoreBoard;

  localStorage.setItem("finalscore", finalscore);
  location.replace("./highscores.html");
}

document.getElementById("begin-quiz").addEventListener("click", startQuiz);
