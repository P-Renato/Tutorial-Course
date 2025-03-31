
let score = JSON.parse(localStorage.getItem('score')) || {      // This JSON thing is to grab it and turn it back into an object
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function autoPlay () {
    setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove)
    }, 1000)
}

function playGame (playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
        result = 'Tie.';
        } else if (computerMove === 'rock') {
        result = 'You lose.';
        } else if (computerMove === 'paper') {
        result = 'You win.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        } else if (computerMove === 'rock') {
            result = 'You win.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
        result = 'Tie.';
        } else if (computerMove === 'paper') {
        result = 'You lose.';
        } else if (computerMove === 'scissors') {
        result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    }
    
    if (result === 'You lose.') {
        score.losses += 1;
    }

    if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));  // This is to make the object into a string

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('js-moves').innerHTML = `You <img class="move-icon" src="Images/${playerMove}-emoji.png" alt="rock-emoji">
<img src="Images/${computerMove}-emoji.png" class="move-icon" alt="scissors-emoji"> Computer`;
            
}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

}

function pickComputerMove () {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber>= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}


