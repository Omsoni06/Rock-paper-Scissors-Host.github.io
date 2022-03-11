let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice() {
  let choices = ["r", "p", "s"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToword(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "paper";
    return "scissors";

}



function win(userChoice,computerChoice){
    userScore++
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=` YOU WIN computer lose `;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(() => {
  document.getElementById(userChoice).classList.remove('green-glow');
}, 500);

}
function lose(userChoice,computerChoice){
    computerScore++
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=` COMPUTER WIN you lose `;
    document.getElementById(userChoice).classList.add('red-glow');
setTimeout(() => {
  document.getElementById(userChoice).classList.remove('red-glow');
}, 500);
   
}
function draw(userChoice,computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=` Its a draw  `;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => {
      document.getElementById(userChoice).classList.remove('gray-glow');
    }, 500);
    
      
}



function game(userChoice) {
  const computerChoice = getcomputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
     win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
