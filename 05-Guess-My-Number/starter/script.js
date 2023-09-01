'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `Play Around!`;

// document.querySelector(`.number`).textContent = 10;
// document.querySelector(`.score`).textContent = 5;

// document.querySelector(`.guess`).value = 5;

const secretNumber = Math.trunc(Math.random()*20)+1
document.querySelector(`.number`).textContent = secretNumber

document.querySelector(`.check`).addEventListener(`click`, 
function() {
    const guess = Number(document.querySelector(`.guess`).value)
   
    if (!guess){
        document.querySelector(`.message`).textContent = `🛑 No Number!`
    } else if (guess === secretNumber) {
        document.querySelector(`.message`).textContent = `🎉 Correct Number!`
    }
    else if (guess > secretNumber) {
        document.querySelector(`.message`).textContent = `Too high`
    }
    else if (guess < secretNumber < 21) {
        document.querySelector(`.message`).textContent = `Too low` 
    } else {
        document.querySelector(`.message`).textContent = `Not in range`
    }
}
)

