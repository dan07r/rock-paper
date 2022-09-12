const rockPaperScissors = ["rock", "paper", "scissors"];



function getComputerChoice(){

    
    let pcChoice = rockPaperScissors[Math.floor(Math.random() * 3)];


    console.log(pcChoice);

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
    } else if( userChoice == "rock" && pcChoice == "paper"){
        alert("You won!");
    } else if(userChoice == "paper" && pcChoice == "scissors"){
        alert("You lost!");
    } else if( userChoice == "paper" && pcChoice == "rock"){
        alert("You won!");
    } else if(userChoice == "scissors" && pcChoice == "rock"){
        alert("You lost!");
    } else if( userChoice == "scissors" && pcChoice == "paper"){
        alert("You won!");
    } else {
        alert("its a tie!");
    }



} else {
    userChoice = prompt("Choose a correct option: ");
}

}while (checker < 1);