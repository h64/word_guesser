/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";

/* DOM References */
let wordContainer = document.querySelector('#guess-word-container');
let textBox = document.querySelector('#textbox');

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    console.log('The word is:', word);
    displayWordBlanks();
}

// Helper function that adds multiple <div>_</div> to DOM
const displayWordBlanks = () => {
    for(let i = 0; i < word.length; i++) {
        let letter = document.createElement('div');
        letter.textContent = '_'
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }
}

// On submit event: Guess a letter or guess the whole word
guessLetter = event => {
    event.preventDefault();
    console.log(`You submitted: ${textBox.value}`);
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);