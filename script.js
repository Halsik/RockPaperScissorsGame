const playerDisplay = document.querySelector(".yourChoice")
const comDisplay = document.querySelector(".comChoice")
const resultPlayer = document.querySelector(".namePlayer")
const resultCom = document.querySelector(".nameCom")
const playerCont = document.querySelector(".player")
const playerName = document.querySelector(".namePlayer")
const comName = document.querySelector(".nameCom")
const comCont = document.querySelector(".computer")

// Scores
const scorePlayer = document.querySelector(".scorePlayer")
const scoreCom =  document.querySelector(".scoreCom")
// Popup modal
const popUp = document.querySelector(".overlay")
const text = document.querySelector(".text")


// Default settings
let gameAlive = false
let playerChoice;
let comChoice;
let randomNumber;
let comScore = 0
let playerScore = 0



// Choose Rock
function chooseRock() {
    if(gameAlive === false && playerScore <= 2 && comScore <= 2) {
    playerChoice = "🗿"
    playerDisplay.textContent = "🗿"
    playerDisplay.style["font-size"] = "120px"
    }
}

// Choose Paper
function choosePaper() {
    if(gameAlive === false && playerScore <= 2 && comScore <= 2) {
    playerChoice = "📝"
    playerDisplay.textContent = "📝"
    playerDisplay.style["font-size"] = "120px"
    }
}

// Choose Scissors
function chooseScissors() {
    if(gameAlive === false && playerScore <= 2 && comScore <= 2) {
    playerChoice = "✂️"
    playerDisplay.textContent = "✂️"
    playerDisplay.style["font-size"] = "120px"
    }
}

// Select hand for computer and print in into HTML
function comHand() {
    randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        comChoice = "🗿"
    } else if(randomNumber === 2) {
        comChoice = "📝"
    } else {
        comChoice = "✂️"
    }
    comDisplay.innerHTML = comChoice
    comDisplay.style["font-size"] = "120px"
}

// Start button function
function start() {
    if(playerChoice === "🗿" || playerChoice === "✂️" || playerChoice === "📝") {
        check()
    } 
}

// check who is a winner of round and add styling to CSS
function check() {
   if(gameAlive === false && playerScore <= 2 && comScore <= 2) {
    comHand()
    if(comChoice === "🗿" && playerChoice === "🗿" || 
    comChoice === "📝" && playerChoice === "📝" || 
    comChoice === "✂️" && playerChoice === "✂️" ) {
        resultCom.innerHTML = "DRAW!"
        resultPlayer.innerHTML = "DRAW!"
        playerCont.classList.toggle("draw")
        comCont.classList.toggle("draw")
        comName.classList.toggle("loserTitle")
        playerName.classList.toggle("loserTitle")
        randomNumber = Math.floor(Math.random() * 3) + 1
        gameAlive = true
        checkChad() 
    } else if(comChoice === "🗿" && playerChoice === "📝" || 
    comChoice === "📝" && playerChoice === "✂️" || 
    comChoice === "✂️" && playerChoice === "🗿") {
        resultCom.innerHTML = "LOSER!"
        resultPlayer.innerHTML = "WINNER!"
        playerCont.classList.toggle("winner")
        playerName.classList.toggle("winnerTitle")
        comCont.classList.toggle("loser")
        comName.classList.toggle("loserTitle")
        scoreCom.classList.toggle("loserTitleScore")
        playerScore++
        scorePlayer.innerHTML = playerScore
        randomNumber = Math.floor(Math.random() * 3) + 1
        gameAlive = true
        checkChad()
    } else {
        resultCom.innerHTML = "WINNER!"
        resultPlayer.innerHTML = "LOSER!"
        comCont.classList.toggle("winner")
        comName.classList.toggle("winnerTitle")
        playerCont.classList.toggle("loser")
        playerName.classList.toggle("loserTitle")
        scorePlayer.classList.toggle("loserTitleScore")
        comScore++
        scoreCom.innerHTML = comScore
        randomNumber = Math.floor(Math.random() * 3) + 1
        gameAlive = true
        checkChad()
    }
}
    

}



// remove styles and restore default settings
function reset() {
    if(gameAlive === true) {
    resultCom.innerHTML = "COMPUTER"
    resultPlayer.innerHTML = "PLAYER"
    comDisplay.innerHTML = "💻"
    playerDisplay.innerHTML = "👨"
    comDisplay.style["font-size"] = "90px"
    playerDisplay.style["font-size"] = "90px"
    playerCont.classList.remove("winner")
    playerCont.classList.remove("loser")
    comCont.classList.remove("winner")
    playerCont.classList.remove("draw")
    comCont.classList.remove("draw")
    comCont.classList.remove("loser")
    comName.classList.remove("winnerTitle")
    playerName.classList.remove("winnerTitle")
    comName.classList.remove("loserTitle")
    playerName.classList.remove("loserTitle")
    playerChoice = 0
    gameAlive = false
} 

}

// Check winner of it all!
function checkChad() {
    if(comScore >= 3) {
        comCont.classList.toggle("winnerAll")
        playerCont.classList.toggle("loserAll")
        gameAlive = false
        popUp.classList.toggle("show")
        text.innerHTML = "Computer win!"
    } else if(playerScore >= 3) {
        playerCont.classList.toggle("winnerAll")
        comCont.classList.toggle("loserAll")
        gameAlive = false
        popUp.classList.toggle("show")
        text.innerHTML = "You win!"
    }
}


