var inputEl = document.querySelector("#initials-input");    
var initialButton = document.querySelector("#submit");
var HighScoreEl = document.querySelector("#highscores");
var initialsEl = document.querySelector("#initials");
var finalScoreEl = document.querySelector("#final-score");


function showFinalScore() {
finalScoreEl.textContent = localStorage.getItem("finalscore");
}

showFinalScore();




// function saveHighscore() {
//   // get value of input box
//   var initials = inputEl.value.trim();

//   // make sure value wasn't empty
//   if (initials !== "") {
//     // get saved scores from localstorage, or if not any, set to empty array
//     var highscores =
//       JSON.parse(window.localStorage.getItem("highscores")) || [];

//     // format new score object for current user
//     var newScore = {
//       score: time,
//       initials: initials
//     };

//     // save to localstorage
//     highscores.push(newScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highscores));
//   }
// }

// function printHighscores() {
//   // either get scores from localstorage or set to empty array
//   var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

//   // sort highscores by score property in descending order
//   highscores.sort(function(a, b) {
//     return b.score - a.score;
//   });

//   highscores.forEach(function(score) {
//     // create li tag for each high score
//     var liTag = document.createElement("li");
//     liTag.textContent = score.initials + " - " + score.score;

//     // display on page
//     var olEl = document.getElementById("scores");
//     olEl.appendChild(liTag);
//   });
// }

// function clearHighscores() {
//   window.localStorage.removeItem("scores");
//   window.location.reload();
// }

// document.getElementById("clear").onclick = clearHighscores;

// // run function when page loads
// printHighscores();
