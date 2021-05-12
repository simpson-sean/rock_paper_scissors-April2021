// import functions and grab DOM elements
import { doesUserWin, getComputerThrow } from './utils.js';
const displayUserWins = document.getElementById('user-wins');
const displayUserLoss = document.getElementById('user-loss');
const displayUserDraw = document.getElementById('user-draws');
const displayUserTotals = document.getElementById('user-totals');
const displaySubmitButton = document.getElementById('submit-button');
// initialize state
let totalWins = 0;
let totalLoss = 0;
let totalDraw = 0;
let totalPlays = 0;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

displaySubmitButton.addEventListener('click', () => {
    const selectedThrow = document.querySelector('input:checked');
    const userThrow = selectedThrow.value;
    let randomNumber = Math.ceil(Math.random() * 3);
    if (doesUserWin(userThrow, getComputerThrow(randomNumber)) === 'win') {
        totalWins++;
        totalPlays++;
        displayUserWins.textContent = `Total Wins ${totalWins}`;
        displayUserTotals.textContent = `Total Plays ${totalPlays}`;
    } else if (doesUserWin(userThrow, getComputerThrow(randomNumber)) === 'draw') {
        totalDraw++;
        totalPlays++;
        displayUserDraw.textContent = `Total Draws ${totalDraw}`;
        displayUserTotals.textContent = `Total Plays ${totalPlays}`;
    } else if (doesUserWin(userThrow, getComputerThrow(randomNumber)) === 'lose') {
        totalLoss++;
        totalPlays++;
        displayUserLoss.textContent = `Total Losses ${totalLoss}`;
        displayUserTotals.textContent = `Total Plays ${totalPlays}`;
    }
});