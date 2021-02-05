/* Constants */
const WORD_LIST = ['feather', 'offense', 'football', 'marzipan', 'balloon']


/* Game Logic Variables and State */
let secretWord = ""
let unguessedWord = [];
let word = 0;

/* DOM References */
let guessForm = document.getElementById('guess-form')
let messageContainer = document.querySelector('#message-container')
let wordContainer = document.querySelector('#word-container')
let wordLettersEl = document.getElementById('wrong-letters')

/* Functions and app logic */

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    for (let i = 0; i < secretWord.length; i++) {
        unguessedWord.push('_');
    }
    console.log(unguessedWord);
    console.log('The secret word is ', secretWord);


}

initialize()

const handleSubmit = event => {
    // sets game state 
    event.preventDefault();
    let guess = messageContainer.value;
    if (guess == 0) return;

    letterString = unguessedWord.push('');

    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
            unguessedWord[i] = guess;
        }
    }
}

console.log(secretWord)

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
// refer to rock pap sci game today
const displayMessage = msg => {
    while (messages.firstChild) {
        messages.removeChild(messages.firstChild)
    }
    let msg1 = document.createElement('h3');
    msg1.textContent = msg;

    messages.appendChild(msg1);
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
guessForm.addEventListener('submit', handleSubmit);