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

// Initialize the game: 
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = event => {
    word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    console.log('The word is:', word);
    displayWordStatus();
    for (let i = 0; i < word.length; i++) {
        arrayLetter = word.charAt(i);
        wordArray.push(arrayLetter);
    }
    // console.log(wordArray)
}

// guessLetter();


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
    submittedLetter();
    isGuessCorrect();
}

// Display a message to the user in the messagebox
const submittedLetter = msg => {
    while(messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }
    messages.textContent = `You submitted: ${textBox.value}. `
    messages.classList.add("messages");
}

// Determine if letter is correct or incorrect
const isGuessCorrect = event => {
    /* If correct, add the letter to the guessed list,
    and redraw the secret word with the new letter(s) showing.*/
    for(const letter of wordArray) {
        if(letter == textBox.value)
        letter.textContent = textBox.value
        let letterIndex = wordArray.indexOf(letter)
        wordArray.splice(letterIndex, 1)
    }
    
    // If incorrect, tell user it's incorrect.
    incorrectGuess();

    // When the word is fully revealed, tell the user they've won!
    guessedWholeWord();
}

const incorrectGuess = msg => {
    messages.append("That is an incorrect guess.")
}

const guessedWholeWord = msg => {
    while(messages.firstChild) {
        messages.removeChild(messages.firstChild);
    }
    messages.textContent = `Congrats, you guessed the whole word!`
    messages.classList.add("messages");
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);









// for(let i = 0; i < wordArray; i++)
//         if(letter ) {
//         let finalArray = wordArray.splice(i, 1)
//         }