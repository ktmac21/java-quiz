let inputEl = document.getElementById("initials-input");
let initialButton = document.getElementById("#submit");

let finalScoreEl = document.querySelector(".finalscore");


function showFinalScore() {
  let finalScore = localStorage.getItem("finalscore");
  finalScoreEl.textContent = finalScore;
}

showFinalScore();

document.getElementById("submit").onclick = function () {
  saveHighScores(inputEl.value);
};

function saveHighScores(initials) {
let finalScore = localStorage.getItem("finalscore");
if (initials !== "") {
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  let newScore = {
    initials: initials,
    score: finalScore,
  };
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.reload();
}
}

function printHighScores() {
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.sort(function(a, b) {
    return b.score - a.score;});

  highscores.forEach((score) => {
    let initialsLiTag = document.createElement("li");
    let scoreLiTag = document.createElement("li");
    initialsLiTag.classList.add('initialsSpacing');
    initialsLiTag.textContent = score.initials;
    scoreLiTag.classList.add('scoreSpacing');
    scoreLiTag.textContent = score.score;

    let listEl = document.querySelector(".container");
    listEl.appendChild(initialsLiTag);
    listEl.appendChild(scoreLiTag);
  });

  }

document.getElementById("submit").onclick = function () {
  saveHighScores(inputEl.value);
  inputEl.value = "";
  
};

printHighScores();







