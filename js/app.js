/* Constants */
const WORD_LIST = ["producer", "brainstorm", "explosion", "soup", "feather"];

/* Variables and App State */
let word = "";
let guesses = [];
let misses = [];
let unguessedWord = [];
let letters = [];
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
  letters = word.split("");
  console.log(letters);
  console.log("The word is:", word);
  letters.forEach(letter=>{
    unguessedWord.push("_")
  })
  console.log(unguessedWord)
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
    letter.textContent = unguessedWord[i];
    letter.classList.add("letter");
    wordContainer.appendChild(letter);
    console.log(letter.textContent)
  }
};

// On submit event: Guess a letter or guess the whole word
const guessLetter = (event) => {
  event.preventDefault();
  while (messages.firstChild) {
    messages.removeChild(messages.firstChild);
  }

  let input = textbox.value;
  let message = document.createElement("h3");
  if (input.length > 1) {
    message.innerText = "please pick only one letter";
    messages.appendChild(message);
    textBox.value = null;
  } else if (input.length == 1) {
    if (letters.includes(input)) {
      guesses.unshift(input);
      console.log(guesses);
      message.innerText = "you got it! pick another letter";
      messages.appendChild(message);
      for (let i= 0; i<letters.length; i++){
        if (letters[i] == input) {
          unguessedWord[i]=input;
        }
      }
      // letters.forEach(letter =>{
      //   if(letters[letter]== input){
      //   unguessedWord[i]=input;}
      // });
      displayWordStatus();


      // letters.forEach(item => {
      //   if (item = input) {
      //     let letter = document.createElement("div");
      //     letter.textContent = `${guesses[0]}`;
      //     letter.classList.add("letter");
      //     wordContainer.appendChild(letter);
      //   } else {
      //     let letter = document.createElement("div");
      //     letter.textContent = "_";
      //     letter.classList.add("letter");
      //     wordContainer.appendChild(letter);
      //   }
      // });
      textBox.value = null;
    } else {
      misses.unshift(input);
      console.log(misses);
      message.innerText = "pick another letter";
      messages.appendChild(message);
      console.log(`You submitted: ${textBox.value}`);
      textBox.value = null;
    }
  } else {
    message.innerText = "pick one letter!";
    messages.appendChild(message);
    textBox.value = null;
  }
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
