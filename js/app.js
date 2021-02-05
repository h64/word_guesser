/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";
let unguessedWord = []
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

    for(let i = 0; i <word.length; i++){
        unguessedWord.push(' ')
    }
    console.log(unguessedWord)
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
        letter.textContent = unguessedWord[i]
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }
}

// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    event.preventDefault();
    console.log(`You submitted: ${textBox.value}`)
    let guess = textBox.value

    if(guess == word) {
        console.log('whole match!')
    }
    else if(guess.length == 1) {
        if(word.includes(guess)) {
            console.log(guess + ' is inside of ' + word)
            for(let i = 0; i < word.length; i++){
                if(word[i] == guess) {
                    unguessedWord[i] = guess;
                }
            }
            displayWordStatus()
        } else{
            console.log(guess + ' is not inside of ' + word)
        }
        for(let l in word) {

        }
    }

}


const guessWholeWord = () => {

}
// Display a message to the user in the messagebox
const displayMessage = msg => { 
    /* Your code here! */
    while(messages.firstChild) {
        messages.removeChild(messages.firstChild)
    }
    let paragraph = document.createElement('p')
    paragraph.textContent = msg
    messages.appendChild(paragraph)

}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);