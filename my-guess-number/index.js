'use strict'
let secretNumber
function generateRandom() {
	return secretNumber = Math.trunc(Math.random() * 20) + 1
}
generateRandom()
let number = document.querySelector('.number'),
	input = document.querySelector('.guess'),
	message = document.querySelector('.message'),
	ball = document.querySelector('.score'),
	highScore = document.querySelector('.highscore'),
	again = document.querySelector('.again')
const checkButton = document.querySelector('.check')
let scoreBall = 20
let highedScore

checkButton.addEventListener('click', () => {
	if (input.value === '') {
		input.style.borderColor = 'red'
		setTimeout(()=>{
			input.style.borderColor = ''
		},1000)

	} else {

		if (Number(input.value) > secretNumber) {
			if (scoreBall > 1) {
				message.textContent = '📈Juda baland'
				scoreBall--
				ball.textContent = scoreBall
			} else {
				if (Number(scoreBall) === 0) {
					highedScore = '0'
				}
				scoreBall = 0
				ball.textContent = scoreBall
				message.textContent = 'Yutqizdingiz'
				document.querySelector('body').style.backgroundColor = "red"
			}
		} else if (Number(input.value) < secretNumber) {
			if (scoreBall > 1) {
				message.textContent = '📉Juda past'
				scoreBall--
				ball.textContent = scoreBall
			} else {
				if (Number(scoreBall) === 0) {
					highedScore = '0'
				}
				scoreBall = 0
				ball.textContent = scoreBall
				message.textContent = 'Yutqizdingiz'
				document.querySelector('body').style.backgroundColor = "red"
			}
		} else if (secretNumber === Number(input.value)) {
			message.textContent = "Siz g'alaba qozondingiz"
			highedScore = scoreBall
			document.querySelector('body').style.backgroundColor = "green"
		}
	}
})


again.addEventListener('click', () => {
	generateRandom()
	input.value = ''
	scoreBall = 20
	highScore.textContent = highedScore
	document.querySelector('body').style.backgroundColor = ''
	ball.textContent = 20
	message.textContent = 'Taxmin qiling...'
})

