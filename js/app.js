/* Constants */
const WORD_LIST = ['feather', 'offense', 'football', 'marzipan', 'balloon']

/* Game Logic Variables and State */
let secretWord = ""
let unguessedWord = [];
// let word = 0;

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
    // unguessedWord = secretWord.split('').map(letter => '_')
    for (let i = 0; i < secretWord.length; i++) {
        unguessedWord.push('_');
    }
    console.log(unguessedWord);
    console.log('The secret word is ', secretWord);


    displayWordStatus();

}


const handleSubmit = event => {
    // sets game state 
    // event.preventDefault();
    // let guess = messageContainer.value;
    // if (guess == 0) return;

    // letterString = unguessedWord.push('');

    // for (let i = 0; i < secretWord.length; i++) {
    //     if (secretWord[i] === guess) {
    //         unguessedWord[i] = guess;
    //     }
    // }
}

const guessLetter = event => {
    event.preventDefault();
    console.log(`you submitted: ${messageContainer.value}`);
    let guess = messageContainer.textBox.value

    if (guess == word) {
        unguessedWord = word.split('');
        displayWordStatus()
    }
    else if (guess.length == 1) {
        if (secretWord.includes(guess)) {
            for (let i = 0; i < secretWord.length; i++) {
                if (unguessedWord[i] == guess) {
                    unguessedWord[i] = guess;
                }
            }
            displayWordStatus()
        } else {

        }

    }
    // let letter = 
}


const displayWordStatus = () => {
    while (wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }

    for (let i = 0; i < secretWord.length; i++) {

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