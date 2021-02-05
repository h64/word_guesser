/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

console.log('The word is:', randomWord);

let s;
let answerArray = []



/* DOM References */
// let wordContainer = document.querySelector('#guess-word-container');
let textBox = document.querySelector('#textbox');
let messages = document.querySelector('#messages');

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    for(let i = 0; i < randomWord.length; i++){
        answerArray[i] = '_';
    }
    s = answerArray.join(" ");
    document.querySelector('#guess-word-container').innerHtml = s;

    // displayWordStatus();
}

// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
    // Clear(empty) all of the divs children 
    while(wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
    for(let i = 0; i < word.length; i++) {
        let letter = document.createElement('div');
        letter.textContent = '_'
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }
}

// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    event.preventDefault();
    let letter = document.querySelector('#textbox').value;
    // console.log(`You submitted: ${textBox.value}`);
    for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === letter){
            answerArray[i] = letter;
            console.log(letter)
        }

    }
    document.getElementById('guess-word-container').innerHTML = answerArray.join(' ');
}

// Display a message to the user in the messagebox
const displayMessage = msg => { 
    /* Your code here! */

}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);