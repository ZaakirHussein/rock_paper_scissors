// Rock, Paper, Scissors

// Step 1: Create three buttons, one for each selection. 
// Step 2: Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)*/

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorButton = document.querySelector('#scissors-button');
 
rockButton.addEventListener('click', function() {
     console.log(game("rock")) });

paperButton.addEventListener('click', function() {
     console.log(game("paper")) });
     
scissorButton.addEventListener('click', function() {
     console.log(game("scissors")) });

// Random Computer Selection. Array for the random generator to select from. 
const rockPaperScissorsArr = ['rock', 'paper', 'scissors'];

let computerChoice = " ";
const computerPlay = () => {
     computerChoice = rockPaperScissorsArr[Math.floor(Math.random() * rockPaperScissorsArr.length)]
     return computerChoice
};
//Computer's Selection. Random computer picking function is assigned to the parameter used in the playRound() function.  

let computerSelection = computerPlay();

// Player's selection. Array for playerSelection variable. 
let playerSelection = ' ';
let userAnswer = playerSelection;

// Score tallying
let humanScore = 0;
let computerScore = 0;

const scorePlayer = document.querySelector('.player-score-box');
const scoreComp = document.querySelector('.computer-score-box');

// Score tallying - Initialzes (value starts at 0) the score in HTML
scorePlayer.textContent = `Your Score is: ${humanScore}`;
scoreComp.textContent = `The computer's Score is: ${computerScore}`;

// Function that plays a single round of Rock Paper Scissors.
let playRound = (playerSelection, computerSelection) => {
     
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

let resultText = ' ';

function game(playerSelect){
     let playerSelection = playerSelect;
     playRound(playerSelection ,computerPlay());
     scorePlayer.textContent = `Your Score is: ${humanScore}`;
     scoreComp.textContent = `The computer's Score is: ${computerScore}`;

      if (result === 'You Win! Rock beats Scissors.' || result === 'You Win! Paper beats Rock.'|| result === 'You Win! Scissors beats Paper.' ){
          resultText = `In this round you picked: ${playerSelect} and the computer picked: ${computerChoice}. You won this round!! Your score is ${humanScore} and the computer's score is ${computerScore} `;
          document.getElementById('result-list').textContent = resultText;
          roundWon++;
          return finalResult(); 
     } else if (result === 'You Lose! Paper beats Rock.' || result === 'You Lose! Scissors beats Paper.'|| result === 'You Lose! Rock beats Scissors.' ){ 
          resultText = `In this round you picked: ${playerSelect} and the computer picked: ${computerChoice}. You lost this round. Your score is ${humanScore} and the computer's score is ${computerScore} `;
          document.getElementById('result-list').textContent = resultText;
          roundLost++;
          return finalResult();
     } else (result === 'It is a tie!')
          resultText = `In this round you picked: ${playerSelect} and the computer picked: ${computerChoice}. This is a tie. Your score is ${humanScore} and the computer's score is ${computerScore} `;
          return document.getElementById('result-list').textContent = resultText
  
};

// Announce a winner of the game once one player reaches 5 points.
let finalMessage = document.querySelector('#winner-text');

const finalResult = () => {
if (roundWon >= 5){
     finalMessage = `You won! Your final score was ${humanScore} and the computer scored ${computerScore}.`
     return document.getElementById('winner-text').textContent = finalMessage;
}else if (roundLost >= 5){
     finalMessage = `You lost! Your final score was ${humanScore} and the computer scored ${computerScore}.`
     return document.getElementById('winner-text').textContent = finalMessage;
} else 
     return console.log('Huh?')

}; 

// End of game function needed below

const endGame = () => {
     
}


// All appears to be working well