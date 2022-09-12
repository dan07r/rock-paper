const rockPaperScissors = ["rock", "paper", "scissors"];

let computerWins = 0;
let userWins = 0;


function game(){

function getComputerChoice(){

    
    let pcChoice = rockPaperScissors[Math.floor(Math.random() * 3)];

    return pcChoice;

}

let pcChoice = getComputerChoice();

let userChoice = prompt("Choose Rock, Paper or Scissors: ");

userChoice = userChoice.toLowerCase();

let checker = 0;

do {

if(rockPaperScissors.includes(userChoice)){

 ++checker;

    if(userChoice == "rock" && pcChoice == "scissors"){
        alert("You won!");
        userWins++;
    } else if( userChoice == "rock" && pcChoice == "paper"){
        alert("You won!");
        userWins++;
    } else if(userChoice == "paper" && pcChoice == "scissors"){
        alert("You lost!");
        computerWins++;
    } else if( userChoice == "paper" && pcChoice == "rock"){
        alert("You won!");
        userWins++;
    } else if(userChoice == "scissors" && pcChoice == "rock"){
        alert("You lost!");
        computerWins++;
    } else if( userChoice == "scissors" && pcChoice == "paper"){
        alert("You won!");
        userWins++;
    } else {
        alert("its a tie!");
    }



} else {
    userChoice = prompt("Choose a correct option: ");
}

}while (checker < 1);

}

for (let i = 0; i < 5; i++){

    game();


}

if(computerWins > userWins){
    alert("sorry the computer won!")
}else if(computerWins < userWins) {
    alert("Yay! you won!");
}else {
    alert("Wow it was a tie!");
}
