/* Constants */
const WORD_LIST = ['producer', 'brainstorm', 'explosion', 'soup', 'feather']

/* Variables and App State */
let word = "";

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
        letter.textContent = '_'
        letter.classList.add("letter");
        wordContainer.appendChild(letter);
    }
}

// On submit event: Guess a letter or guess the whole word
const guessLetter = event => {
    event.preventDefault();

    if(textBox.value.length == 1){
    
    console.log(`You submitted: ${textBox.value}`);

    wordSplit = word.split()
    let allFalse = false;
    for(i = 0; i < word.length; i++){

        
        if(textBox.value == word[i]){
        wordContainer.children[i].textContent = word[i]
        displayMessage("Right on!")
            allFalse = true;
        }   
        


    }

    if(allFalse === false){
        displayMessage("Nope! Not even close!!")
    }

    } else if(textBox.value.length == word.length){

        if(textBox.value == word){
            console.log("win")
            
            for(i = 0; i < word.length; i++){
            wordContainer.children[i].textContent = word[i]
            } 
            
            displayMessage("You got the word!")

        }

    }

    else{
        alert("invalid # of letters guessed")
    }

}


// Display a message to the user in the messagebox
const displayMessage = msg => { 
    /* Your code here! */
    messages.innerText = msg;
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('submit', guessLetter);



