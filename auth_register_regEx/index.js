'use strict'
const userNameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const wrongUsername = document.querySelector('.wrong')
const wrongPassword = document.querySelector('.wrongPassword')
const btn = document.querySelector('.login')

const onValidUsername = (val) => {
	const usernameRegex = /^[a-z0-9_@.]+$/
	return usernameRegex.test(val)
}
function checkPassword(str) {
	var re = /^(?=.*\d)(?=.*[a-z]).{8,}$/
	return re.test(str)
}
userNameInput.addEventListener('input', () => {
	if (!onValidUsername(userNameInput.value)) {
		wrongUsername.style.color = 'red'
		wrongUsername.textContent = 'Iltimos malumotni to\'g\'ri kiriting'
	} else {
		wrongUsername.style.color = ''
		wrongUsername.textContent = ''
	}

})

passwordInput.addEventListener('input', () => {
	if (passwordInput.value === '') {
		wrongPassword.style.color = ''
		wrongPassword.textContent = ''
	} else {
		if (!checkPassword(passwordInput.value)) {
			wrongPassword.style.color = 'red'
			wrongPassword.textContent = 'Iltimos malumotni to\'g\'ri kiriting'
		} else {
			wrongPassword.style.color = ''
			wrongPassword.textContent = ''
		}
	}
})
