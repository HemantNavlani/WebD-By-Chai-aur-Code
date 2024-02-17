let randomNumber = parseInt(Math.random()*100+1)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const lowOrHi = document.querySelector('.lowOrHi')
const guessesSlot = document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult')
const startNew = document.querySelector('.resultParas')
let prevGuess = [];
let numGuess = 1;
let playGame = true;

const p = document.createElement('p')

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)) alert(`Please enter a valid number`);
    else if (guess>100) alert(`Please enter a number lesser than or equal to 100`);
    else if (guess<1) alert(`Please enter a number greater than equal to 1`);
    else {
        prevGuess.push(guess);
        displayGuess(guess)
        checkGuess(guess);
        if (numGuess>10){
            displayMessage(`Game Over !! Random Number was : ${randomNumber}`)
            endGame()
        }
    }
}

function checkGuess(guess){
    if (guess===randomNumber){
        displayMessage(`You Won Buddy !! You Guessed It Right :-)`)
        endGame();
    }
    else if (guess<randomNumber){
        displayMessage(`Your guess is TOOO LOW `);
    }
    else {
        displayMessage(`Your guess is TOO HIGH `);
    }
}
function displayGuess(guess){
    userInput.value = ''
    if (guessesSlot.innerHTML == '-') {
        guessesSlot.innerHTML = ' '
    }
    guessesSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.className = 'button'
    userInput.setAttribute('placeholder','Game Over !!')
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`
    startNew.appendChild(p)
    playGame = false;
    
    submit.remove()

    newGame();
}

function newGame (){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click',function(e){
        userInput.after(submit)
        randomNumber = parseInt(Math.random()*100+1)
        userInput.removeAttribute('disabled')
        startNew.removeChild(p)
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('placeholder')
        prevGuess = []
        numGuess =1 ;
        guessesSlot.innerHTML = '-'
        remaining.innerHTML = `${11-numGuess}`
        playGame = true;
    })
    
}
