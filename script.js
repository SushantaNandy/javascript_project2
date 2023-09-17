'use strict';
let player0Score = document.querySelector('#score--0');
let player1Score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--0');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let initialScore;
let score;
let activePlayer;
const init = function () {
  initialScore = 0;
  score = [0, 0];
  //we define active player
  activePlayer = 0;
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

//switch player function
const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent =
    initialScore = 0;
  activePlayer = activePlayer == 1 ? 0 : 1;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//starting conditions
player0Score.textContent = player1Score.textContent = 0;
dice.classList.add('hidden');

//rolling dice functionality
rollBtn.addEventListener('click', function () {
  //generating any random number b/w 1-6
  let diceRandom = Math.trunc(Math.random() * 6) + 1;
  //displaying the dice
  dice.classList.remove('hidden');
  //setting the dice image according to the random number
  dice.src = `dice-${diceRandom}.png`;
  //for checking purpose
  console.log(diceRandom);
  //adding the number in current score
  if (diceRandom !== 1) {
    //add dice random values to current score
    initialScore += diceRandom;
    //let do it dynamically
    document.querySelector(`#current--${activePlayer}`).textContent =
      initialScore;

    //currentScore.textContent = initialScore;
  } else {
    //switch next player
    switchplayer();
  }
});

//adding the players score in totak score
btnHold.addEventListener('click', function () {
  //check if the play's score is >=100

  //player wins
  //add current score to active players score
  score[activePlayer] += initialScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  if (score[activePlayer] > 100) {
    //change the colour for winner
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    rollBtn.classList.add('hidden');
    btnHold.classList.add('hidden');
    dice.classList.add('hidden');
  }

  //switch next player

  switchplayer();
});

//for new game button we need to reset everything back
newGame.addEventListener('click', function () {
  init();
});
