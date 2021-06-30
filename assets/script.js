const quizQuestions = [

  {

    question: "Values made up of text & can contain letters, numbers, symbols, punctuation, & even emojis are called:",
    answers: {
      a: "strings",
      b: "methods",
      c: "functions",
      d: "text messages",
    },
    correctAnswer: "b",
  },

  {

    question: "This property keeps track of how many characters it has:",
    answers: {
      a: "string",
      b: "length",
      c: "slice",
      d: "semi-colon",
    },

    correctAnswer: "b",
  },


  {
    question: "In Javascript, these are variables that contain multiple data values and use keys to name values:",
    answers: {
      a: "functions",
      b: "methods",
      c: "data",
      d: "objects",
    },
    correctAnswer: "d",
  },

  {

    question: "This is the word for functions when they are stored as a property within a JavaScript object:",
    answers: {
      a: "mediaQuery",
      b: "methods",
      c: "functions",
      d: "event listeners",
    },
    correctAnswer: "b",
  },

  {

    question: "If a condition is true, this conditional statement is used to specify execution for a block of code:",
    answers: {
      a: "if",
      b: "while",
      c: "if else",
      d: "none of the above",
    },
    correctAnswer: "a",
  },

  {

    question: "This conditional statement specifies a new test if the first condition is false:",
    answers: {
      a: "if else",
      b: "while",
      c: "for loop",
      d: "when",
    },
    correctAnswer: "a",
  },

  {

    question: "A function must be what in order to call it:",
    answers: {
      a: "declared",
      b: "imagined",
      c: "enabled",
      d: "run",
    },
    correctAnswer: "a",

  },

  {
    question: "A boolean value is a value that can be either:",
    answers: {
      a: "number or letter",
      b: "true or false",
      c: "right or wrong",
      d: "All of the above",
    },
    correctAnswer: "b",

  },

  {

    question: "This Javascript function is used to detect certain events, such as a user's mouse click or a key press, and then it responds accordingly:",
    answers: {
      a: "event detector",
      b: "movement listener",
      c: "event listener",
      d: "None of the above",
    },
    correctAnswer: "b",

  },

  {

    question: "Javascript’s querySelector() method does which of the following:",
    answers: {
      a: "returns the first element that matches a specified CSS selector(s) in the document",
      b: "runs a query loop after it’s selected",
      c: "starts the program when an HTML element is clicked",
      d: "runs a while loop",
    },
    correctAnswer: "a",

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



function startQuiz () {
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
function displayQuestion () {
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
// function checkAnswer() {
  
//   quizQuestions.forEach( (currentQuestion, questionNumber) => {

    
  
//     // if answer is correct
//     if(userAnswer === currentQuestion.correctAnswer){
//       score++;
//     }
  
//   });
// checkAnswer();

// function scoreboard() {
//   scorepoints = 100
//   if (answeredQuestion === true) {
//     scorepoints ++;

//   }
// }

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerText.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}


function sendMessage() {
  timerText.textContent = "Time's up!";

};

// var playerScore = document.querySelector("#player-score")
// var highScore = document.querySelector("high-score")
// var score = 0
// var scoreBoardCount = 100
// var savedHighScore = document.querySelector("#data-saved-high-score")

// function scoreBoard() {
//   if (answeredQuestion === correctAnswer) {
//     scoreboard + scoreBoardCount 

//     playerScore.textContent = score
//     highScore.textContent = savedHighScore
//   }
// }

// function endGame() {
//   if (secondLeft === 0 || questionsAnswered === 10) {
//     return; 
//   }
//   if (score > savedHighScore.lastChild) {
//     //go to highscore page
//   }
// }

// var playerInitials = document.querySelector("#intials")
// var playerHighScore = document.querySelector("#top-scores")
// function enterinitials() {
//   //allow input of player initials and save to page
  
  
// }


startButton.addEventListener("click", startQuiz);

