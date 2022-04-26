 //randomly outputs computer RPS choice
 function computerPlay() {
    let int = Math.floor(Math.random() * (3) + 1);
    if (int === 1) {
        return 'Rock';
    } else if (int === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
//console.log(computerPlay());

//prints winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        results.textContent = 'You win that round! ' + computerSelection + ' beats ' + playerSelection;
        return 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        results.textContent = 'You win that round! ' + computerSelection + ' beats ' + playerSelection;
        return 1;
    } else if (playerSelection === 'Scissors' && computerSelection == 'Paper') {
        results.textContent = 'You win that round! ' + computerSelection + ' beats ' + playerSelection;
        return 1;
    } else if (playerSelection === computerSelection) {
        results.textContent = "It's a tie";
        return 0;
    } else {
        results.textContent = 'You lose that round! ' + computerSelection + ' beats ' + playerSelection;
        return 2;
        
    }

}

//plays best of 5 game
function game() {
    let playerSelection = '';
    let computerSelection = '';
    let winner;
    let playerWin = 0;
    let compWin = 0;

    for (let i = 0; i < 5; i++){
     //   playerSelection = playerPlay();
     //   computerSelection = computerPlay();
        //winner = playRound(playerSelection, computerSelection);
        if (winner === 1) {
            playerWin++;
            console.log('You win that round! ' + computerSelection + ' beats ' + playerSelection + '. The score is ' + playerWin + '-' + compWin);
        } else {
            compWin++;
            console.log('You lose that round! ' + computerSelection + ' beats ' + playerSelection + '. The score is ' + playerWin + '-' + compWin);
        }
        if (playerWin === 3) {
            console.log('You win!');
            break;
        } else if (compWin === 3) {
            console.log('Computer wins!');
            break;
        }
    }
}

const score = document.getElementById("score");
const results = document.getElementById("results");
const end = document.getElementById("end");
let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = button.id;
        const winner = playRound(playerSelection, computerSelection);

        end.textContent = '';
        if (winner === 1) {
            playerScore++;
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } else if (winner === 2) {
            computerScore++;
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } else if (winner === 0) {
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        }
        if (playerScore === 5) {
            end.textContent = "You're the first to five wins, you WIN";
            playerScore = 0;
            computerScore = 0;
        } else if (playerScore === 5) {
            end.textContent = "The computer was the first to five wins, you LOSE. Choose again to start over.";
            playerScore = 0;
            computerScore = 0;
        }
    });
});