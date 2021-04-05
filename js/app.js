// Randomly choose a word from this list as the secret word.
// Display the unrevealed word as underscores (with the same length.)
// Prompt the user to enter a letter.
// If the letter is in the word, mark it as revealed and visually display that letter in the word.
// If the letter is incorrect, indicate to the user that the guess was incorrect.

/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather', 'mama', 'fries', 'television']

/* Variables and App State */
let word = "";
let ungesstword = [];

/* DOM References */
let wordContainer = document.querySelector('#guess-word-container');
let textBox = document.querySelector('#textbox');
let messages = document.querySelector('#messages');

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    console.log('The word is:', word);
    displayWordStatus();
}

// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
    // Clear(empty) all of the divs children 
    while(wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
    for(let i = 0; i < word.length; i++) {
        let letter = document.createElement('div');
        letter.textContent = '_';
        letter.classList.add("letter");
        let eachletter = wordContainer.appendChild(letter);
    }
}

// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    event.preventDefault();
    console.log(`You submitted: ${textBox.value}`);

    //Push 'textBox.value' into displayWordStatus

}

// Display a message to the user in the messagebox
const displayMessage = msg => { 
    /* Your code here! */
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);