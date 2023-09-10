'use strict';
// selecting Elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`); // u can select ids using this
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const currentScoreEl0 = document.querySelector(`#current--0`);
const currentScoreEl1 = document.querySelector(`#current--1`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

// starting condition
let score, currentScore, playing, currentPlayer;
const init = function () {
  diceEl.classList.add(`hidden`);

  currentScore = 0;
  currentPlayer = 0;
  score = [0, 0];
  playing = true;

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// rollong dice functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // generate random dice number
    let dice = Math.trunc(Math.random() * 6) + 1;
    // diplay dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    // if other than 1 add the score to current score else switch player
    if (dice !== 1) {
      currentScore += dice;
      // currentScoreEl0.textContent = currentScore; // only works for 1 player ... change when switch

      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    score[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      score[currentPlayer];

    if (score[currentPlayer] >= 100) {
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, init);
