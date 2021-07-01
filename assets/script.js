var quizQuestions = [

  {
    question: "Values made up of text & can contain letters, numbers, symbols, punctuation, & even emojis are called:",
    answers: {
      a: "strings", correct: true,
      b: "methods", correct: false,
      c: "functions", correct: false,
      d: "text messages", correct: false,
    },
  
  },

  {

    question: "This property keeps track of how many characters it has:",
    answers: {
      a: "string", correct: false,
      b: "length", correct: true,
      c: "slice", correct: false,
      d: "semi-colon", correct: false, 
    },

  },


  {
    question: "In Javascript, these are variables that contain multiple data values and use keys to name values:",
    answers: {
      a: "functions", correct: false,
      b: "methods", correct: false,
      c: "data", correct: false,
      d: "objects", correct: true, 
    },

  },

  {

    question: "This is the word for functions when they are stored as a property within a JavaScript object:",
    answers: {
      a: "mediaQuery", correct: false,
      b: "methods", correct: true,
      c: "functions", correct: false,
      d: "event listeners", correct: false,
    },

  },

  {

    question: "If a condition is true, this conditional statement is used to specify execution for a block of code:",
    answers: {
      a: "if", correct: true,
      b: "while", correct: false,
      c: "if else", correct: false,
      d: "none of the above", correct: false,
    },
   
  },

  {

    question: "This conditional statement specifies a new test if the first condition is false:",
    answers: {
      a: "if else", correct: true,
      b: "while", correct: false,
      c: "for loop", correct: false,
      d: "when", correct: false,
    },
  
  },

  {

    question: "A function must be what in order to call it:",
    answers: {
      a: "declared", correct: true,
      b: "imagined", correct: false,
      c: "enabled", correct: false,
      d: "run", correct: false,
    },

  },

  {
    question: "A boolean value is a value that can be either:",
    answers: {
      a: "number or letter", correct: false,
      b: "true or false", correct: true,
      c: "right or wrong", correct: false,
      d: "All of the above", correct: false,
    },

  },

  {

    question: "This Javascript function is used to detect certain events, such as a user's mouse click or a key press, and then it responds accordingly:",
    answers: {
      a: "event detector", correct: false,
      b: "movement listener", correct: false,
      c: "event listener", correct: true,
      d: "None of the above", correct: false,
    },

  },

  {

    question: "Javascript’s querySelector() method does which of the following:",
    answers: {
      a: "returns the first element that matches a specified CSS selector(s) in the document", correct: true,
      b: "runs a query loop after it’s selected", correct: false,
      c: "starts the program when an HTML element is clicked", correct: false,
      d: "runs a while loop", correct: false,
    },


  },

]

var startButton = document.querySelector("#begin-quiz");
var timerText = document.querySelector("#timer");
var quizContainer = document.querySelector("#quiz");
var scoreText = document.querySelector("#player-score");
var highScoreText = document.querySelector("#high-score");
var secondsLeft = 30;
var currentQuestion = 0;
var chosenQuestion;



function startQuiz() {
  startButton.style.display = "none";
  setTime();
  chosenQuestion = quizQuestions[currentQuestion];
  
  var questionTitle = document.createElement("p");
  questionTitle.innerText = chosenQuestion.question;
  questionTitle.classList.add("questionTitle");
  quizContainer.appendChild(questionTitle);


  var buttonEl = document.createElement("button");
  buttonEl.innerText = chosenQuestion.answers.a;
  buttonEl.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonEl);

  var buttonTwo = document.createElement("button");
  buttonTwo.innerText = chosenQuestion.answers.b;
  buttonTwo.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonTwo);

  var buttonThree = document.createElement("button");
  buttonThree.innerText = chosenQuestion.answers.c;
  buttonThree.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonThree);

  var buttonFour = document.createElement("button");
  buttonFour.innerText = chosenQuestion.answers.d;
  buttonFour.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonFour);


}


function showNextQuestion() {
  currentQuestion++;
  displayQuestion();
  
}
function displayQuestion() {
  quizContainer.innerHTML = ""
  chosenQuestion = quizQuestions[currentQuestion];

  var questionTitle = document.createElement("p");
  questionTitle.innerText = chosenQuestion.question;
  questionTitle.classList.add("questionTitle");
  quizContainer.appendChild(questionTitle);


  var buttonEl = document.createElement("button");
  buttonEl.innerText = chosenQuestion.answers.a;
  buttonEl.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonEl);

  var buttonTwo = document.createElement("button");
  buttonTwo.innerText = chosenQuestion.answers.b;
  buttonTwo.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonTwo);

  var buttonThree = document.createElement("button");
  buttonThree.innerText = chosenQuestion.answers.c;
  buttonThree.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonThree);

  var buttonFour = document.createElement("button");
  buttonFour.innerText = chosenQuestion.answers.d;
  buttonFour.addEventListener("click", showNextQuestion);
  quizContainer.appendChild(buttonFour);
}

startButton.addEventListener("click", startQuiz);

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerText.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      goToHighScores();
      
    }
  }, 1000);
}


function sendMessage() {
  timerText.textContent = "Game over!";
  

};
var playerScore = document.querySelector("#player-score")
var highScore = document.querySelector("high-score")
var score = 0 
var savedHighScore = document.querySelector("#data-saved-high-score")

 
var buttonEl = document.querySelector("button");
var buttonTwo = document.querySelector("button");
var buttonThree = document.querySelector("button");
var buttonFour = document.querySelector("button");



scoreBoardEl = document.querySelector("#scoreboard");


function checkAnswers() {
  var selectedButton = quizQuestions;
  console.log(selectedButton);
  if (selectedButton === true) {
    score + 100;
    scoreBoardEl.textContent = score; 
  }else {
    secondsLeft - 10; 
  }
  
  }
  buttonEl.addEventListener("click", checkAnswers);
  buttonTwo.addEventListener("click", checkAnswers);
  buttonThree.addEventListener("click", checkAnswers);
  buttonFour.addEventListener("click", checkAnswers); 
  


function goToHighScores() {
    location.replace("./highscores.html")
  }
var inputEl = document.querySelector("#initials-input")    
var initialButton = document.querySelector("#submit")
var HighScoreEl = document.querySelector("#scores")
var initialsEl = document.querySelector("#initials")


renderInitialsScore();

function renderLastInitial() {
  var initials = localStorage.getItem("initials");
  var score = localStorage.getItem("scores");

  if (!initials || !score) {
    return;
  }

  initialsEl.textContent = initials;
  HighScoreEl.textContent = score;
}

initialButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("initial").value;
  var score = document.querySelector("score").value;

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else if (score === "") {
    displayMessage("error", "Score cannot be blank");
  } else {
    displayMessage("success", "Player info entered successfully");

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
    renderLastRegistered();
  }
});
