/* Constants */
const WORD_LIST = ['warriors', 'atmosphere', 'thrown', 'general', 'assembly']

/* Variables and App State */
let word = "";
let wordStatus = [];

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
    wordStatus = word.split('').map(l => '_');

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
        letter.textContent = wordStatus[i];
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }
}

// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    event.preventDefault();
    let guess = textBox.value;
    if(guess.length == 0) return; // Reject empty submission

    letters = word.split('');
    // console.log(`You submitted: ${guess}`);
    // console.log('Letters:', letters);

    if(guess.length == 1) { // Guessing one letter
        if(letters.includes(guess)) {
            displayMessage(`${guess} is a match!`)
            for(let i = 0; i < word.length; i++) {
                if(word[i] == guess) {
                    wordStatus[i] = guess;
                } 
            }
            displayWordStatus();
            if(!wordStatus.includes("_")) {
                displayMessage("Congrats! You've guessed the whole word!")
            }
            
        } else {
            displayMessage(`${guess} is not a match.`)
        }
    } else {
        if(guess == word) {
            displayMessage("Congrats! You've guessed the whole word!")
            wordStatus = letters;
            displayWordStatus();
        } else {
            displayMessage(`Sorry! ${guess} is not the word I'm thinking of!`);
        }
    }
}

const displayMessage = msg => {
    // Clear all elements inside messages
    while(messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }
    let p = document.createElement('p');
    p.textContent = msg;
    messages.appendChild(p);
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);
