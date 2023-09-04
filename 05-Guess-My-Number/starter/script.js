'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `Play Around!`;

// document.querySelector(`.number`).textContent = 10;
// document.querySelector(`.score`).textContent = 5;

// document.querySelector(`.guess`).value = 5;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.number`).textContent = secretNumber;

let score = 20;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector(`.message`).textContent = `🛑 No Number!`;
  } else if (guess > 20 || guess <= 0) {
    document.querySelector(`.message`).textContent = `🛑 Not in Range!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

    document.querySelector(`.number`).style.backgroundColor = `#ffffff`;
    document.querySelector(`.number`).style.width = `30rem`;

    document.querySelector(`body`).style.backgroundColor = `#018749`;
  } else if (guess > secretNumber && guess < 21) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `😔 Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `🥵 You lost the Game`;
    }
  } else if (guess < secretNumber && guess > 0) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `😔 Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `🥵 You lost the Game`;
    }
  }
});
