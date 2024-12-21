'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let message=document.querySelector('.message'),
wrong=document.querySelector('.wrong'),
number=document.querySelector('.number'),
guess1=document.querySelector('.guess'),
highscore=document.querySelector('.highscore'),
score1=document.querySelector('.score'),
body=document.querySelector('body');
let score = 20

//addEventListener
document.querySelector('.check').addEventListener('click', function () {
	let guess = Number(guess1.value)
	if (!guess) {
		message.textContent = '⛔Raqam yo\'q'
		guess1.style.border = '4px solid red'
		wrong.textContent = 'Iltimos, raqam kiriting'
		wrong.style.color = 'red'
		wrong.style.marginBottom = '2rem'
		setTimeout(() => {
			guess1.style.border = '4px solid white'
			wrong.textContent = ''
			wrong.style.marginBottom = ''
		}, 1000)
	} else if (guess === secretNumber) {
		message.textContent = '🎉To\'g\'ri raqam'
		highscore.textContent = score
		body.style.backgroundColor = '#60b347'
	} else if (guess > secretNumber) {
		if (score > 1) {
			message.textContent = '📈Juda baland'
			score--
			score1.textContent = score
		} else {
			message.textContent = '💥Siz yutqazdingiz'
			score1.textContent = 0
		}
	} else if (guess < secretNumber) {
		if (score > 1) {
			message.textContent = '📉Juda past'
			score--
			score1.textContent = score
		} else {
			message.textContent = '💥Siz yutqazdingiz'
			body.style.backgroundColor = 'red'
			score1.textContent = 0
		}
	}
})

document.querySelector('.again').addEventListener('click', function () {
	message.textContent = 'Taxmin qiling...'
	score1.textContent = 20
	body.style.backgroundColor = '#222'
	guess1.value='';
})
