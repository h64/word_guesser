// Constants
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

// Variables and App State
let word = "";

// DOM References
let wordContainer = document.querySelector('#guess-word-container');


// Functions and app logic
const initialize = () => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    displayBlankWord();
}

const displayBlankWord = () => {
    let letters = [];
    for(let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        let letter = document.createElement('div');
        letter.textContent = '_'
        letter.classList.add("letter");
        wordContainer.appendChild(letter);

    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initialize)