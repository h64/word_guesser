/* Constants */
const WORD_LIST = ["producer", "brainstorm", "explosion", "soup", "feather"];

/* Variables and App State */
let word = "";

/* DOM References */
let wordContainer = document.querySelector("#guess-word-container");
let textBox = document.querySelector("#textbox");
let messages = document.querySelector("#messages-container");

/* Functions and app logic */

// Initialize the game:
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = (event) => {
  word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  console.log("The word is:", word);
  displayWordStatus();
};

// Helper function that adds multiple <div>_</div> to DOM
const displayWordStatus = () => {
  // Clear(empty) all of the divs children
  while (wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
  }
  for (let i = 0; i < word.length; i++) {
    let letter = document.createElement("div");
    letter.textContent = "_";
    letter.classList.add("letter");
    wordContainer.appendChild(letter);
  }
};
const appendMessage = (message) => {
  messages.appendChild(messages(message));
};

// On submit event: Guess a letter or guess the whole word
const guessLetter = (event) => {
  event.preventDefault();

  let input = textbox.value;
  if (input.length > 1) {
    console.log("please pick only one letter");
  }
  if (input.length == 1) {
    console.log(input);
  } else {
    console.log("please submit a letter");
  }

  letters = word.split("");
  console.log(letters);
  if (letters.includes(input)) {
    console.log(input);
  } else console.log("pick another letter");
  console.log(`You submitted: ${textBox.value}`);
};

// Display a message to the user in the messagebox
const displayMessage = (msg) => {
  /* Your code here! */
};

/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
document.addEventListener("submit", guessLetter);

// CODE-ALONG
// /* Constants */
// const WORD_LIST = ["producer", "brainstorm", "explosion", "soup", "feather"];
// /* Game Logic Variables and State */
// let secretWord = "";
// let unguessedWord = [];
// /* DOM References */
// let guessForm = document.querySelector("#guess-form");
// let messageContainer = document.querySelector("#message-container");
// let wordContainer = document.querySelector("#guess-word-container");
// /* Functions and Game Logic */
// const initialize = (event) => {
//   secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
//   unguessedWord = secretWord.split("").map((letter) => "_");
//   console.log(unguessedWord);
//   console.log(secretWord);
//   displayWordStatus();
// };
// const handleSubmit = (event) => {};
// displayWordStatus = () => {
//   while (wordContainer.firstChild) {
//     wordContainer.removeChild(wordContainer.firstChild);
//   }
//   unguessedWord.forEach((letter) => {
//     let letterDiv = document.createElement("div");
//     letterDiv.textContent = letter;
//     letterDiv.classList.add("letter");
//     wordContainer.appendChild(letterDiv);
//   });
// };
// /* Event Listeners */
// document.addEventListener("DOMContentLoaded", initialize);
// guessForm.addEventListener("submit", handleSubmit);
