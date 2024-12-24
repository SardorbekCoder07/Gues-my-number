'use strict'
//O'zgaruvchilarga saqlangan elementlar
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
//boshlanish qisim 
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')//dastlabki kurinishda rasm yuq holatda turadi


let currentScore = 0
//toshni aylantirish funksiyalari

btnRoll.addEventListener('click', function () {
	//1.Toshni tasodifiy aylantirish orqali qiymat olishimiz kerak buladi
	const dice = Math.trunc(Math.random() * 6) + 1
	console.log(dice)

	//2.Toshdan olingan qiymatni ekranda kursatish 
	diceEl.classList.remove('hidden')
	diceEl.src = `dice-${dice}.png`

	// 3.Yutqazish funksiyasi ya'ni agar tashlangan tosh 1 ga teng bulsa yani true busa biz uyinni keyingi ishtirokchiga utkazishimiz kerak buladi

	if (dice !== 1) {
		currentScore += dice
		current0El.textContent = currentScore
	} else {
		//Keyingi ishtirokchiga o'tqazish
	}
})
