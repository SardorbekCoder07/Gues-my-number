'use strict'
//1.score elementlarini o'zgaruvchiga saqlash
//2. score elementlarini contentini 0 ga aylantirish 
//3. dice emementni o'zgaruvchiga saqalab uni displayini nonoe holatiga keltirish 
//4.roll hamda hold buttonlarni o'zgaruvchiga saqlash va toshni aylanstirish funksiyasini yozish 
//5. tosh 1 ga teng bo'lganda playerni almashtirish
//6.currentScore ni saqlash hamda ekranga chiqarish
//7.score array ochish
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const curren0El = document.getElementById('current--0')
const curren1El = document.getElementById('current--1')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let score, currentScore, activePlayer, playing
const init = () => {
	score = [0, 0]
	currentScore = 0
	activePlayer = 0
	playing = true

	score0El.textContent = 0
	score1El.textContent = 0
	curren0El.textContent = 0
	curren1El.textContent = 0

	diceEl.classList.add('hidden')
	player0El.classList.remove('player--winner')
	player1El.classList.remove('player--winner')
	player0El.classList.add('player--active')
	player1El.classList.remove('player--active')
}
init()
const switchPlayer = () => {
	document.getElementById(`current--${activePlayer}`).textContent = 0
	currentScore = 0
	activePlayer = activePlayer === 0 ? 1 : 0
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', () => {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6) + 1
		diceEl.classList.remove('hidden')
		diceEl.src = `dice-${dice}.png`


		if (dice !== 1) {
			currentScore += dice
			document.getElementById(`current--${activePlayer}`).textContent = currentScore
		} else {
			switchPlayer()
		}
	}
})


btnHold.addEventListener('click', () => {
	if (playing) {
		//1. active playerni currentScoreni scorega qo'shish
		score[activePlayer] += currentScore
		document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

		//score 100 dan baland bulgan active playerni yutdi deb chiqarish
		if (score[activePlayer] >= 20) {
			playing = false
			diceEl.classList.add('hidden')
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

		} else {
			switchPlayer()
		}
		//finish the game

		//score ga qiymat saqlanganda playerni almashtirish
	}
})

btnNew.addEventListener('click', init())