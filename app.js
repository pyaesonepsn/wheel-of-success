
const phrases = [
    "HIV",
    "The Departed",
    "The wolf of wallstreet",
    "Titanic",
    "TechDegree",
]
const qwerty = document.getElementById('qwerty');
const Phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay =  document.getElementById("overlay")
const title = document.querySelector('.title');
const ul = document.querySelector('ul');
let missed = 0;

startGame.addEventListener('click', () =>{
    overlay.style.display = "none";
});
function getRandomPhraseAsArray(arr) {
    let randomNumber =  Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomNumber].toLowerCase();
    let randomSplit = randomPhrase.split('');
    console.log(randomSplit);
    return randomSplit;
};
const PhraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr) {
    for (let i=0; i<arr.length; i++) {
        let li = document.createElement('li');
        li.textContent =arr[i];
        ul.appendChild(li);
        
        if(arr[i]===' '){
            li.className = 'space';
        }else{
            li.className = 'letter';
        }
    }
};
addPhraseToDisplay(PhraseArray);

function checkLetter (button) {
    const listItems = document.querySelectorAll('li');
    let match = null;
    for(let i=0; i<listItems.length; i++){
        if(button.textContent === listItems[i].textContent.toLowerCase()){
            listItems[i].classList.add('show');
            match = button.textContent;
        }
    }
        return match;
};

qwerty.addEventListener ('click', (e) =>{
    const btn = e.target;
    if(btn.tagName === 'BUTTON' || btn.className === 'chosen'){
        btn.className = 'chosen';
        btn.disabled = true;
        const letterFound = checkLetter(btn);
        if (letterFound === null) {
            const headLost = document.querySelectorAll('.tries img');
            headLost[missed].src = 'images/lostHeart.png';
            headLost.className = ' lost';
            missed++;
            console.log(headLost);
        }
    }
        checkWin();
});

function checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    if (letter.length === show.length) {
        overlay.className = 'win'; 
        title.textContent = 'Your Win';
        overlay.style.display = 'flex';
    } else if (missed > 4 ) {
        overlay.className = 'lose';
        title.textContent = 'Your Lose';
        overlay.style.display = 'flex';
    }
    
};
 












