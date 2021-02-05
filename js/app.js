/* Constants */
const WORD_LIST = ["producer", "brainstorm", "explosion", "soup", "feather"];

/* Variables and App State */
let secretWord = "";
let displayWord = "";
let secretWordArray = [];
let unguessedWord = [];
let underscoreCounter = null;

/* DOM References */
let wordContainer = document.querySelector("#guess-word-container");
let textBox = document.querySelector("#textbox");
let messages = document.querySelector("#message-container");
let guessForm = document.querySelector("#guess-form");
let letterToReplace = document.querySelector(".letter");

/* Functions and app logic */

// Initialize the game:
// 1. Reset state variables
// 2. Display the word blanks in the DOM
const initialize = (event) => {
  secretWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  for (let i = 0; i < secretWord.length; i++) {
    unguessedWord.push("_");
  }
  console.log("The word is:", secretWord);
  displayWordStatus();
  underscoreCounter();
  secretWordLetters = secretWord.split("");
  //   console.log(secretWordLetters)
  secretWordLetters.forEach((element) => {
    secretWordArray.push(element);
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
    letter.textContent = unguessedWord[i];
    letter.classList.add("letter");
    wordContainer.appendChild(letter);
  }
};

const guessLetter = (event) => {
  event.preventDefault();
  //   console.log(`You submitted: ${textBox.value}`);
  let letterGuess = textBox.value;
  if (letterGuess == secretWord) {
    unguessedWord = secretWord.split("");
    displayWordStatus();
    messages.innerText = `You guessed the whole word! Love this for you.`;
  } else if (letterGuess.length == 1) {
    if (secretWord.includes(letterGuess)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] == letterGuess) {
          unguessedWord[i] = letterGuess;
          messages.innerText = `${letterGuess} is a match!`;
        }
      }
      displayWordStatus();
    } else {
      messages.innerText = `${letterGuess} is not a match.`;
    }
  }
  clear();
};

underscoreCounter = () => {
  if (unguessedWord.includes("_")) {
    return true;
  } else {
    return false;
  }
};

// On submit event: Guess a letter or guess the whole word
// const guessLetter = (event) => {
//   event.preventDefault();
//   //   console.log(`You submitted: ${textBox.value}`);
//   let letterGuess = textBox.value;
//   if (secretWord.includes(letterGuess) && unguessedWord.length === 1) {
//     messages.innerText = `You won! Love this for you.`;
//   }

// else if (secretWord === letterGuess){
//     messages.innerText = `You guessed the whole word! Love this for you.`;
//   } else if (letterGuess.length == 1 && secretWord.includes(letterGuess)) {
//     messages.innerText = `${letterGuess} is a match!`;
//     unguessedWord[i] = letterGuess;
//     // secretWordArray.pop(secretWordArray[i])
//   } else {
//     messages.innerText = `${letterGuess} is not a match.`;
//   }
//   clear();
// };

//   const newDisplayLetter = () => {
//     for (let i = 0; i < secretWord.length; i++) {
//         if (secretWord[i] === textBox.value && wordContainer.firstChild.textContent === "_") {
//             letterToReplace.textContent(`${correctGuessArray[0]}`);
//         }
//     }
//   }

const clear = () => {
  textBox.value = "";
};
/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
guessForm.addEventListener("submit", guessLetter);
