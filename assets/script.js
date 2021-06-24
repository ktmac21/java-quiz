// var quizQuestions = [

//     {
        
//     question: "Values made up of text & can contain letters, numbers, symbols, punctuation, & even emojis are called",
//     answers: {

//     a: "strings",
// 	b: "methods",
// 	c: "functions",
// 	d: "text messages",
// },

// correctAnswer: "a"
// },

// {
        
//     question: "This property keeps track of how many characters it has:",
//     answers: {

//     a: "string",
// 	b: "length",
// 	c: "slice",
// 	d: "semi-colon",
// },

// correctAnswer: "b"
// },


// {
        
//     question: "In Javascript, these are variables that contain multiple data values and use keys to name values:",
//     answers: {

//     a: "functions",
// 	b: "methods",
// 	c: "data",
// 	d: "objects",
// },

// correctAnswer: "d"
// },

// {
        
//     question: "This is the word for functions when they are stored as a property within a JavaScript object:",
//     answers: {

//     a: "mediaQuery",
// 	b: "methods",
// 	c: "functions",
// 	d: "event listeners",
// },

// correctAnswer: "b"
// },

// {
        
//     question: "If a condition is true, this conditional statement is used to specify execution for a block of code:",
//     answers: {

//     a: "if",
// 	b: "while",
// 	c: "if else",
// 	d: "none of the above",
// },

// correctAnswer: "a"
// },

// {
        
//     question: "This conditional statement specifies a new test if the first condition is false:",
//     answers: {

//     a: "if else",
// 	b: "while",
// 	c: "for loop",
// 	d: "when",
// },

// correctAnswer: "a"
// },

// {
        
//     question: "A function must be what in order to call it?:",
//     answers: {

//     a: "declared",
// 	b: "imagined",
// 	c: "enabled",
// 	d: "run",
// },

// correctAnswer: "a"  

// },

// {
        
//     question: "A boolean value is a value that can be either:",
//     answers: {

//     a: "number or letter",
// 	b: "true or false",
// 	c: "right or wrong",
// 	d: "All of the above",
// },

// correctAnswer: "b"  

// },

// {
        
//     question: "This Javascript function is used to detect certain events, such as a user's mouse click or a key press, and then it responds accordingly:",
//     answers: {

//     a: "event detector",
// 	b: "movement listener",
// 	c: "event listener",
// 	d: "None of the above",
// },

// correctAnswer: "b"  

// },

// {
        
//     question: "Javascript’s querySelector() method does which of the following:",

//     answers: {

//     a: "returns the first element that matches a specified CSS selector(s) in the document",
// 	b: "runs a query loop after it’s selected",
// 	c: "starts the program when an HTML element is clicked",
// 	d: "runs a while loop",
// },

// correctAnswer: "a"  

// },

// ]

var secondsLeft = 30;
var startButton = document.querySelector(".button");
var timerText = document.querySelector(".timer");
startButton.addEventListener("click",function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerText.textContent = secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    }, 1000);
  }
  )
function sendMessage() {
    timerText.textContent = "Your time is up!";
  }