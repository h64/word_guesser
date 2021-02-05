/* Constants */
const WORD_LIST = ['feather', 'offense', 'football', 'marzipan', 'balloon']

/* Game Logic Variables and State */
let secretWord = ""
let unguessedWord = [];

/* DOM References */
let guessForm = document.getElementById('guess-form')
let messageContainer = document.querySelector('#message-container')
let wordContainer = document.querySelector('#word-container')

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]

    for (let i = 0; i < secretWord.length; i++) {
        unguessedWord.push('_');
    }
    // console.log(unguessedWord);
    // console.log('The secret word is ', secretWord);
    displayWordStatus()
}

const handleSubmit = event => {

}

const displayWordStatus = () => {
    while (wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
    unguessedWord.forEach(letter => {
        let letterDiv = document.createElement('div');
        letterDiv.textContent = letter;
        letterDiv.classList.add('letter');
        wordContainer.appendChild(letterDiv);
    })
}

// displays msg
const displayMessage = msg => {

}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
guessForm.addEventListener('submit', handleSubmit)