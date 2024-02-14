function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
// for set & remove background color
function setBackgroundColorById(elementId) {
    const background = document.getElementById(elementId);
    background.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId) {
    const background = document.getElementById(elementId);
    background.classList.remove('bg-orange-400')
}

//  get value from input and display it in the result div
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

// get and set  values to elements by id
function getTexValueElementById(eventId) {
    const element = document.getElementById(eventId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

function setTexValueElementById(eventId, value) {
    const element = document.getElementById(eventId);
    element.innerText = value;
}