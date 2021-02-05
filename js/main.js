/* Constants */
const WORD_LIST = ["kiwi", "strawberry", "apple", "pear"];

const guesses = document.getElementById("guesses");
const guessForm = document.getElementById("guess-form");
const maxGID = document.getElementById("maxG");
/* Game Logic Variables and State */
let word = "";
let unguessedWord = [];
let textBox = document.getElementById("textbox");
let letter = "";
let maxGuesses = word.length;
/* DOM References */

let guesForm = document.getElementById("guess-form");
let messageContainer = document.getElementById("message-container");
let wordContainer = document.getElementById("word-container");

/* Functions and Game Logic */
const initialize = (event) => {
  word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  console.log(word);
  unguessedWord = word.split(" ").map((letter) => "_");
  maxGuesses = word.length;
  maxGID.innerText = `max guesses ${maxGuesses}`;
  displayWordStatus();
};

const handleSubmit = (event) => {};

const displayWordStatus = () => {
  // Clear(empty) all of the divs children
  while (wordContainer.firstChild) {
    wordContainer.removeChild(wordContainer.firstChild);
  }
  for (let i = 0; i < word.length; i++) {
    letter = document.createElement("div");
    letter.textContent = "_";
    letter.classList.add("letter");
    wordContainer.appendChild(letter);
  }
};

// add to DOM all of the unguessedWord letters and _ 's

unguessedWord.forEach((letter) => {
  let letterDiv = document.createElement("div");
  letterDiv.textContent = letter;
  letterDiv.classList;
  wordContainer.appendChild(letterDiv);
});
// On submit event: Guess a letter or guess the whole word
const guessLetter = (event) => {
  event.preventDefault();
  console.log(`You submitted: ${textBox.value}`);
  for (let n in word) {
    if (textBox.value == word[n]) {
      console.log(word[n]);
      letter.textContent = word[n];
      // letter.classList.add("letter");
      wordContainer.appendChild(letter);
      maxGuesses--;
      maxGID.innerText = `max guesses ${maxGuesses}`;
    } else {
      maxGuesses--;
      maxGID.innerText = `${textBox.value} is incorrect max guesses ${maxGuesses}`;
    }
  }
};

// Display a message to the user in the messagebox
const displayMessage = (msg) => {
  /* Your code here! */
};

/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
guessForm.addEventListener("submit", guessLetter);
