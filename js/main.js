const kind = document.querySelector('#kind')
const diameter = document.querySelector('.diameter')
const material = document.querySelector('.material')
const Btn = document.querySelector('.button')
const errorText = document.querySelector('.error-info')
const scoreParagraph = document.querySelector('.spindle-rate')
const questionBtn = document.querySelector('.question-mark')
const popUp = document.querySelector('.popup')
const body = document.querySelector('body')
const btnMoon = document.querySelector('.dark-icon')
const btnSun = document.querySelector('.bright-icon')

const calculate = () => {
	let boxScore = ((kind.value * 318) / diameter.value) * material.value
	let boxe = (scoreParagraph.textContent = `${boxScore.toFixed(0)}`)
	errorText.textContent = ''
	scoreParagraph.style.visibility = 'visible'
	popUp.classList.remove('popup-show')
	questionBtn.classList.remove('question-mark--color')
	checkString()
	maxSpindle()
	checkInf()
}

const checkInf = () => {
	if (diameter.value === '') {
		scoreParagraph.textContent = ''
	} else if (diameter.value <= 0) {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Błąd średnicy narzędzia!'
		scoreParagraph.textContent = ''
	}
}

const checkString = () => {
	const re = new RegExp('[^abc]')
	if (diameter.value.match(re)) {
	} else {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Błąd średnicy narzędzia!'
		scoreParagraph.style.visibility = 'hidden'
	}
}

const maxSpindle = () => {
	if (scoreParagraph.textContent >= 20000) {
		scoreParagraph.textContent = '20000'
	}
}
const showPopup = () => {
	popUp.classList.toggle('popup-show')
	questionBtn.classList.toggle('question-mark--color')
}
const darkMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')
		btnSun.classList.toggle('bright-icon--show')
		btnMoon.classList.toggle('dark-icon--hide')
	} else {
		body.setAttribute('data-mode', 'light')
		btnMoon.classList.toggle('dark-icon--hide')
		btnSun.classList.toggle('bright-icon--show')
	}
}

Btn.addEventListener('click', calculate)
questionBtn.addEventListener('click', showPopup)
btnMoon.addEventListener('click', darkMode)
btnSun.addEventListener('click', darkMode)
