const choices = ['rock', 'paper', 'scissor'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = '';
    if(playerChoice === computerChoice){
        result = "It's a tie";
    }else{
        switch(playerChoice){
            case "rock" : 
           result = (computerChoice === "scissors")? "YOU WIN" : "YOU LOOSE";
            break;
            case "paper" : 
            result = (computerChoice === "scissors")? "YOU LOOSE" : "YOU WIN";
            break;
            case "scissor" : 
            result = (computerChoice === "rock")? "YOU LOOSE" : "YOU WIN";
            break;
        }
    }
    playerDisplay.textContent = `PLAYER :${playerChoice}`;
    computerDisplay.textContent = `COMPUTER:${computerChoice}`;
    resultDisplay.textContent = ` RESULT: ${result}`;
}