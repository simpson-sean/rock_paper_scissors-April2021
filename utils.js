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
};

