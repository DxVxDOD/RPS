// Complete logic of the game inside this function

const game = () => {
    let playerScore = 0;
    let compScore = 0;
    let choice = 0;

    // function to play game

    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector(".scissors");
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const compOptions = ["rock", "paper", "scissors"]; 

        // function to start playing the game

        playerOptions.forEach(option => {
            option.addEventListener("click", function(){
                const movesLeft = document.querySelector(".choicesleft");
                choice++;
                movesLeft.innerText = `Moves Left: ${10 - choice}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const compChoice = compOptions[choiceNumber];

                //Function to check who wins
                winner(this.innerText, compChoice)

                //Calling game over function after 10 moves
                if(choice == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }

    //Function to decide who is winnning

    const winner = (player, computer) => {
        const result = document.querySelector(".result");
        const playerScoreBoard = document.querySelector(".p-count");
        const compScoreBoard = document.querySelector(".c-count");

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer) {
            result.textContent = "It is a tie!";
        }
        else if (player == "rock") {
            if (computer == "paper") {
                result.textContent = "Computer has won!";
                compScore++;
                compScoreBoard.textContent = compScore;
            } else {
                result.textContent = "Player has won!";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == "scissors") {
            if (computer == "rock") {
                result.textContent = "Computer has won!";
                compScore++;
                compScoreBoard.textContent = compScore;
            } else {
                result.textContent = "Player has won!";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == "paper") {
            if (computer == "scissors") {
                result.textContent = "Computer has won!";
                compScore++;
                compScoreBoard.textContent = compScore;
            } else {
                result.textContent = "Player has won!";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    //Function to run whenthe game is over

    const gameOver = (playerOptions, movesLeft) => {

        const chooseChoice = document.querySelector(".choice");
        const result = document.querySelector(".result");
        const resetBtn = document.querySelector(".reset");

        playerOptions.forEach(option => {
            option.style.display = "none";
        })

        chooseChoice.innerText = "Game Over!!";
        movesLeft.style.display = "none";

        if (playerScore > compScore) {
            result.style.fontSize = "2rem";
            result.innerText = "You won the game!";
            result.style.color = "red";
        }
        else if (playerScore < compScore) {
            result.style.fontSize = "2rem";
            result.innerText = "You have lost the game!";
            result.style.color = "red";
        } else {
            result.style.fontSize = "2rem";
            result.style.innerText = "It is a tie!";
            result.style.color = "red";
        }
        resetBtn.addEventListener("click", () => {
            window.location.reload()
        })
    }

    playGame();
}
game();