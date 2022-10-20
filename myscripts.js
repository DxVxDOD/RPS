let options = ["Rock", "Paper", "Scissors"];

function computerChoice (choice) {
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}




function playerChoice (choicea) {
    if (choicea === "Rock") {
        return choicea;
    }
    else if (choicea === "Paper") {
        return choicea;
    }
    else if (choicea === "Scissors") {
        return choicea;
    }
    else {
        alert("Invalid input!")
    }
}


function playRound(comp, player) {
    if (comp === player) {
        alert("It is a draw try again!");
    } else if (comp === "Rock" && player === "Scissors") {
        return "Computer has won the round!";
    } else if (comp === "Rock" && player === "Paper") {
        return "Player has won the round!";
    } else if (comp === "Scissors" && player === "Paper") {
        return "Computer has won the round!";
    } else if (comp === "Scissors" && player === "Rock") {
        return "Player has won the round!";
    } else if (comp === "Paper" && player === "Rock") {
        return "Comuter has won the round!";
    } else if (comp === "Paper" && player === "Scissors") {
        return "Player has won the round!";
    }
}


for (let i = 0; i < 5; i++) {
    let playerPrompt = prompt("Please chose Rock, Paper or Scissors!");
    console.log(playRound(computerChoice(options), playerChoice(playerPrompt)));
}