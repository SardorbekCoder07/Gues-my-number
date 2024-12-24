'use strict'
const userNameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const btn = document.querySelector('.login')
const wrongUsername = document.querySelector('.wrong')
const wrongPassword = document.querySelector('.wrongPassword')

//showError function error holatida ishlaydi
const showError = (input, error, message) => {
	input.classList.add('regInput')
	error.textContent = message
	error.style.color = 'red'

	setTimeout(() => {
		input.classList.remove('regInput')
		error.textContent = ''
		error.style.color = ''
	}, 1500)
}
btn.addEventListener('click', () => {
	let hasError = false
	if (!userNameInput.value) {
		showError(userNameInput, wrongUsername, 'Iltimos usernameni kiriting')
		hasError = true
	} else if (!passwordInput.value) {
		showError(passwordInput, wrongPassword, 'Iltimos passwordni kiriting')
		hasError = true
	}
	if (!hasError) {
		window.location.reload()
	}
})

userNameInput.addEventListener('input', () => {
	const regEx = '/\d/g'
	console.log(userNameInput.value)
	console.log(userNameInput.value.test(regEx))


	if (regEx.test(`${userNameInput.value}`)) {
		userNameInput.value = userNameInput.value.replace(regEx, '')
	}

})


