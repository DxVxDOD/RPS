let options = ["Rock", "Paper", "Scissors"];

function computerChoice (choice) {
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

let playerPrompt = prompt("Please chose Rock, Paper or Scissors!")

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

console.log(playerChoice(playerPrompt));