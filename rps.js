let currentScore = [0, 0, 0]

function getRandomInt(min, max) {
    let result = Math.floor(Math.random()*(max-min+1))+min;
    return result;
    
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randint = getRandomInt(0, 2);
    return choices[randint];
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    let currentSelections = `
        You selected ${playerSelection}, 
        computer selected ${computerSelection}
    `
    let currentResult = document.querySelector("#current-match")
    currentResult.textContent = `
    You selected ${playerSelection}, 
    the computer selected ${computerSelection}
    `

    if (playerSelection == computerSelection) {
        return "draw";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "lose";
        } else {
            return "win";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "lose";
        } else {
            return "win"
        }
    } else {
        if (computerSelection == "rock") {
            return "lose";
        } else {
            return "win";
        }
    }
}

function scoreTracker(result) {
    if (result == 'win') {
        currentScore[0] += 1
    } else if (result == 'draw') {
        currentScore[1] += 1
    } else {
        currentScore[2] += 1
    }

    let currentResult = document.querySelector("#score-tracker")
    
    currentResult.textContent = `
    Current Score: 
    ${currentScore[0]} wins 
    ${currentScore[1]} draws 
    ${currentScore[2]} loss
    `
}

const playerChoice = document.querySelectorAll('[name = rps-choice');
playerChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
        scoreTracker(playRound(choice.textContent));
        if (currentScore[0] == 5) {
            alert("YOU WIN!!!");
            currentScore = [0, 0, 0];
        }
        if (currentScore[2] == 5) {
            alert("YOU LOSE!!!");
            currentScore = [0, 0, 0];
        }
    });
});

