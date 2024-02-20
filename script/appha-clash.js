// function play() {
//     // hidden home screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     //  show the play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

// capture keyboard press
document.addEventListener("keyup", handleKeyboardPress);


const audio = new Audio();
let isGameOn = false;
let artBoard = document.getElementById('art-board');
function handleKeyboardPress(event) {
    if (isGameOn === false) return;
    const playerPress = event.key;
    console.log(playerPress);
    if (playerPress === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet)

    // check match or not
    if (expectedAlphabet === playerPress) {
        audio.src = '../audio/success.wav';
        audio.play();



        console.log('You got one point');
        const currentScore = getTexValueElementById('current-score');
        const newScore = currentScore + 1;
        setTexValueElementById('current-score', newScore);

        // -----------------------------------
        // get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // Set new score
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        // continue  next alphabet

        continueGame();
        removeBackgroundColorById(expectedAlphabet);
    }
    else {
        console.log("You lost one point")
        audio.src = '../audio/lost.wav'
        audio.play();

        const currentLife = getTexValueElementById('life-score');
        const life = currentLife - 1;

        const updatedLife = (life / 5) * 100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLife}%, red)`

        setTexValueElementById('life-score', life);
        if (life === 0) {
            gameOver();
        }
        // ------------------------
        // get current life score
        // const currentLifeScoreElement =document.getElementById('life-score');
        // const currentLifeScore = currentLifeScoreElement.innerText;
        // const currentLife = parseInt(currentLifeScore);
        // set reduce life score
        // const newLifeScore = currentLife - 1;
        // currentLifeScoreElement.innerText = newLifeScore;
    }
}


function continueGame() {
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play() {
    setTexValueElementById('life-score', 5);
    setTexValueElementById('current-score', 0);
    hideElementId('home-screen');
    hideElementId('final-score');
    showElementId('play-ground');

    isGameOn = true;

    continueGame();
}

function gameOver() {
    hideElementId('play-ground');
    showElementId('final-score');
    //  get final score and display it on the screen
    const lastScore = getTexValueElementById('current-score');
    setTexValueElementById("last-score", lastScore);
    // Clear the alphabet highlight 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    removeBackgroundColorById(currentAlphabet);

    isGameOn = false;
    artBoard.style.background = "linear-gradient(#FFFFFFB3 100%, red)";
}

document.body.onmousemove = modelBtn

function modelBtn(event) {
    console.log(event)
    if(event.clientY < 12){
        document.getElementById("model").style.display = "flex";
    }
    
}