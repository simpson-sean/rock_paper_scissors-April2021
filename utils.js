export function getComputerThrow(randomNumber) {
    if (randomNumber === 1) {
        return 'rock';
    }
    if (randomNumber === 2) {
        return 'paper';
    }
    if (randomNumber === 3) {
        return 'scissors';
    }
}

export function doesUserWin(userInput, cpuInput) {
    if ((userInput === 'rock' && cpuInput === 'scissors') || (userInput === 'paper' && cpuInput === 'rock') || (userInput === 'scissors' && cpuInput === 'paper')) {
        return 'win';
    } else if (userInput === cpuInput) {
        return 'draw';
    } else {
        return 'lose';
    }
}