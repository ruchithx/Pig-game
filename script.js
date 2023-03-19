'use strict';
let valuePlayer = 0;
let activePlayer = 0;
let fullScore = 0;
let score = [0, 0];

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const socre0E1 = document.querySelector('#score--0');
const socre1E1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');

socre0E1.textContent = 0;
socre1E1.textContent = 0;
diceEl.classList.add('hidde');
let playing = true;

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // document.querySelector(`#score--${activePlayer}`).textContent=int(document.querySelector(`#score--${activePlayer}`).textContent)+valuePlayer;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  valuePlayer = 0;
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove('hidde');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      valuePlayer = valuePlayer + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        valuePlayer;
      console.log(typeof valuePlayer);
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += valuePlayer;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidde');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    switchPlayer();
  }
});
btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidde');
  socre0E1.textContent = 0;
  socre1E1.textContent = 0;
  currentP1.textContent = 0;
  currentP2.textContent = 0;
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--winner');
  player1El.classList.remove('player--winner');
});
