/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";
let wordArray = []

/* DOM References */
let wordContainer = document.querySelector('#guess-word-container');
let textBox = document.querySelector('#textbox');
let messages = document.querySelector('#messages');
let incMessages = document.querySelector('#incorrect-messages')

/* Functions and app logic */
const initialize = event => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    console.log('The word is:', word);
    displayWordStatus();
    for (let i = 0; i < word.length; i++) {
        arrayLetter = word.charAt(i);
        wordArray.push(arrayLetter);
    }
}

const displayWordStatus = () => {
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

const guessLetter = event => {
    event.preventDefault();
    submittedLetter();
    isGuessCorrect();
}

const submittedLetter = msg => {
    while(messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }
    messages.textContent = `You submitted: ${textBox.value}. `
    messages.classList.add("messages");
}

const isGuessCorrect = event => {
    for(const letter of wordArray) {
        if(letter === textBox.value) {
        letter.textContent = textBox.value
        let letterIndex = wordArray.indexOf(letter)
        wordArray.splice(letterIndex, 1)
        guessedWholeWord();
        } else {
            incorrectGuess();
        }
    }
}

const incorrectGuess = msg => {
    messages.append("That is an incorrect guess.")
}

const guessedWholeWord = msg => {
    while(messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }
    if(wordArray.length == 0) {
        messages.textContent = `Congrats, you guessed the whole word!`
        messages.classList.add("messages");
    } else {
        return
    }
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);