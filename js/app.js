console.log('hello')
/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";
let hiddenWord = []

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
    hiddenWord = word.split('').map(x => '_')
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
        letter.textContent = '_'
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }
}
initialize()
console.log(word)
// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    initialize()
    event.preventDefault();
    let userValue = textBox.value
    let userValueArr = userValue.split('')
    hiddenWord = word.split('') 
    for(let i = 0; i<hiddenWord.length; i++){
        console.log(hiddenWord[i])
    }
    for (let i = 0; i < userValueArr.length; i++){
        if(userValueArr[i] == hiddenWord[i]){
        
        }
        else {
            console.log('try again')
        }
        
    }

    console.log(`You submitted: ${textBox.value}`);
}

// Display a message to the user in the messagebox
const displayMessage = msg => { 
    /* Your code here! */
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);