// Rock, Paper, Scissors

// Step 1: Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const rockPaperScissorsArr = ['rock', 'paper', 'scissors']

let computerChoice = " ";
const computerPlay = () => {
     computerChoice = rockPaperScissorsArr[Math.floor(Math.random() * rockPaperScissorsArr.length)]
     return computerChoice
};

let userAnswer = " " ;

const userPlay = () => {
     userAnswer = prompt("Rock, Paper, or Scissors?").toLowerCase();
     return userAnswer
 };
 

/* Step 2: Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */

/* Here I am assigning the value of the parameters in the playRound() function to what the user types in the userPlay() prompt and the return value the computer 
selects in the computerPlay() function. */
const playerSelection = userAnswer;
let computerSelection = computerPlay();

// Initialized and used for tracking the score between user and AI. Left in the global scope to be accessed by the game() function.
let humanScore = 0;
let computerScore = 0;
let result = ' ';

// Function that plays a single round of Rock Paper Scissors.
const playRound = (playerSelection, computerSelection) => {
     
     if (playerSelection === computerSelection){
          return result = 'It is a tie!'
     } else if (playerSelection === 'rock' && computerSelection === 'paper'){
           computerScore++;
           return result = "You Lose! Paper beats Rock."
     } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
           humanScore++;
           return result = 'You Win! Rock beats Scissors.'
     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
           humanScore++;
           return result = 'You Win! Paper beats Rock.'
     } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
           computerScore++;
           return result = 'You Lose! Scissors beats Paper.'
     } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
           humanScore++;
           return result = 'You Win! Scissors beats Paper.'
     } else (playerSelection === 'scissors' && computerSelection === 'rock')
           computerScore++;
           return result = 'You Lose! Rock beats Scissors.'
};


// Step 3: Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

/* 1. You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else 
(or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. 
Loops are covered in the next lesson. */

// 2. At this point you should be using console.log() to display the results of each round and the winner at the end.
// 3. Use prompt() to get input from the user. Read the docs here if you need to.
// 4. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// 4. Feel free to create more “helper” functions if you think it would be useful.

let roundWon = 0;
let roundLost = 0;

function game(){
     playRound(userPlay(),computerPlay());

      if (result === 'You Win! Rock beats Scissors.' || result === 'You Win! Paper beats Rock.'|| result === 'You Win! Scissors beats Paper.' ){
          console.log(`In this round you picked: ${userAnswer} and the computer picked: ${computerChoice}. You won this round!! You get ${humanScore} and the computer gets ${computerScore} `);
          return roundWon++;
     } else if (result === 'You Lose! Paper beats Rock.' || result === 'You Lose! Scissors beats Paper.'|| result === 'You Lose! Rock beats Scissors.' ){ 
          console.log(`In this round you picked: ${userAnswer} and the computer picked: ${computerChoice}. You lost this round. You get ${humanScore} and the computer gets ${computerScore} `);
          return roundLost++;
     } else (result === 'It is a tie!')
          return console.log(`In this round you picked: ${userAnswer} and the computer picked: ${computerChoice}. This is a tie. You get ${humanScore} and the computer gets ${computerScore} `)   
}

//Runs the playRound() function 5 times 
for (let rounds = 0; rounds < 5; rounds++) {
     game();
};

const finalResult = () => {
     if (roundWon === roundLost){
          return `It was a tie! Your final score was ${humanScore} and the computer scored ${computerScore}.`
     }else if (roundWon > roundLost){
          return `You won! Your final score was ${humanScore} and the computer scored ${computerScore}.`
     }else (roundLost > roundWon)
          return `You lost! Your final score was ${humanScore} and the computer scored ${computerScore}.`
};

console.log(finalResult());

// All appears to be working soundly

