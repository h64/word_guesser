/* Constants */
const WORD_LIST = ["producer", "brainstorm", "explosion", "soup", "feather"];

/* Variables and App State */
let secretWord = "";
let displayWord = "";
let secretWordArray = [];
let correctGuessArray = [];
console.log(correctGuessArray);

/* DOM References */
let wordContainer = document.querySelector("#guess-word-container");
let textBox = document.querySelector("#textbox");
let messages = document.querySelector("#message-container");
let guessForm = document.querySelector("#guess-form");

/* Functions and app logic */

// Initialize the game:
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = (event) => {
  secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  console.log("The word is:", secretWord);
  displayWordStatus();
  secretWordLetters = secretWord.split("");
  //   console.log(secretWordLetters)
  secretWordLetters.forEach((element) => {
    secretWordArray.unshift(element);
  });
  // console.log(secretWordArray)
};

// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
  // Clear(empty) all of the divs children
  while (wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
  }
  for (let i = 0; i < secretWord.length; i++) {
    let letter = document.createElement("div");
    letter.textContent = "_";
    letter.classList.add("letter");
    wordContainer.appendChild(letter);
  }
};

// On submit event: Guess a letter or guess the whole word
const guessLetter = (event) => {
  event.preventDefault();
  //   console.log(`You submitted: ${textBox.value}`);
  let letterGuess = textBox.value;
  if (letterGuess.length <= 1 && secretWordArray.includes(letterGuess)) {
    messages.innerText = `${letterGuess} is a match!`;
    correctGuessArray.unshift(letterGuess);
    newDisplayWord();
  } else {
    messages.innerText = `${letterGuess} is not a match.`;
  }
};

// replace _ with correctGuess
const newDisplayWord = () => {
  while (wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
  }
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === textBox.value) {
      let letter = document.createElement("div");
      letter.textContent = `${correctGuessArray[0]}`;
      letter.classList.add("letter");
      wordContainer.appendChild(letter);
    } else {
      let letter = document.createElement("div");
      letter.textContent = "_";
      letter.classList.add("letter");
      wordContainer.appendChild(letter);
    }
  }
};

// // Display a message to the user in the messagebox
// const displayMessage = (msg) => {
//   /* Your code here! */
// };

/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
guessForm.addEventListener("submit", guessLetter);
