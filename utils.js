export function getRandomThrow () {
    const randomNumber = Math.ceil(Math.random() * 3);
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

export function didUserWin (user, compy) {
    if (user === compy) {
        return 'draw';
    }
    if (user === 'paper' && compy === 'rock'
    || user === 'rock' && compy === 'scissors'
    || user === 'scissors' && compy === 'paper') {
        return 'wins';
    }
    
    if (user === 'rock' && compy === 'paper'
    || user === 'scissors' && compy === 'rock'
    || user === 'paper' && compy === 'scissors') {
        return 'lose';
    }
}