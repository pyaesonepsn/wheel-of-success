const phrases = [
    "Demon Slayer",
    "Pneumonia",
    "HIV",
    "Mandalay",
    "Bangkok"
]

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementById('.btn-reset');
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const ul = document.querySelector('ul');
let missed = 0;

startGame.addEventListener('click', () => {
    overlay.style.display: "none";
});

function getRandomPhraseAsArray (arr) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomNumber].toLowerCase();
    let randomSplit = randomPhrase.split('');
    console.log(randomSplit);
    return randomSplit;
}
const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr) {
    for ( let i = 0; i < arr.length; i++) {
        let list = document.createElement('li');
        list.textContent = arr[i];
        ul.appendChild(list);

        if (arr[i] === ' ') {
            list.className = 'space';
        } else {
            list.className = 'letter';
        }
    }
}
addPhraseToDisplay(phraseArray);

function checkLetter (button) {
    const listItems = document.querySelectorAll('li');
    let match = null;
    for ( let i = 0; i < listItems.length; i++){
        if (button.textContent === listItems[i].textContent.toLowerCase()){
            listItems[i].classList.add('show');
            match = button.textContent ;
        }
    }
    return match;
}

qwerty.addEventListener 
