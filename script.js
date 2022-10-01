'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const body = document.querySelector('body');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

checkButton.addEventListener('click', () => {
  const guessValue = Number(guess.value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    displayMessage('⛔️ No number!');
  } else if (guessValue === secretNumber) {
    displayMessage('HORRAY! YOU GUESSED IT RIGHT!');

    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? 'Too high' : 'Too low');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreElement.textContent = 0;
    }
  }
});

againButton.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  number.textContent = '?';
  guess.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
