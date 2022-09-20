import { render } from './helpers/render.js'

const kind: HTMLOptionElement = document.querySelector('#kind')
const diameter: HTMLInputElement = document.querySelector('.diameter')
const material: HTMLOptionElement = document.querySelector('.material')
const btn: HTMLButtonElement = document.querySelector('.button')
const errorText: HTMLElement = document.querySelector('.error-info')
const scoreParagraph: HTMLParagraphElement = document.querySelector('.spindle-rate')
const questionBtn: HTMLButtonElement = document.querySelector('.question-mark')
const popUp: HTMLElement = document.querySelector('.popup')
const body: HTMLElement = document.querySelector('body')
const btnMoon: HTMLButtonElement = document.querySelector('.dark-icon')
const btnSun: HTMLButtonElement = document.querySelector('.bright-icon')

const calculate = () => {
	let text: string = diameter.value
	let kin: number = Number(kind.value)
	let dia: number = Number(diameter.value)
	let mat: number = Number(material.value)
	let boxScore: number = ((kin * 318) / dia) * mat

	scoreParagraph.textContent = `${boxScore.toFixed(0)}`

	errorText.textContent = ''
	scoreParagraph.style.visibility = 'visible'
	popUp.classList.remove('popup-show')
	questionBtn.classList.remove('question-mark--color')
	checkString(text)
	maxSpindle(boxScore)
	checkInf(dia, kin, mat)
}
const checkInf = (dia: number, kin: number, mat: number) => {
	if (!dia) {
		scoreParagraph.textContent = ''
	} else if (dia <= 0) {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Błąd średnicy narzędzia!'
		scoreParagraph.textContent = ''
	} else if (dia >= 125) {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Błąd średnicy narzędzia!'
		scoreParagraph.textContent = ''
	} else if (kin <= 0) {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Wypełnij parametry obróbki!'
		scoreParagraph.style.visibility = 'hidden'
	} else if (mat <= 0) {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Wypełnij parametry obróbki!'
		scoreParagraph.style.visibility = 'hidden'
	}
}
const checkString = (text: string) => {
	const re: RegExp = new RegExp('[^abc]')
	if (text.match(re)) {
	} else {
		errorText.style.visibility = 'visible'
		errorText.textContent = 'Błąd średnicy narzędzia!'
		scoreParagraph.style.visibility = 'hidden'
	}
}

const maxSpindle = (boxScore: number) => {
	if (boxScore >= 20000) {
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
		scoreParagraph.classList.add('spindle-rate--bright')
	} else {
		body.setAttribute('data-mode', 'light')
		btnMoon.classList.toggle('dark-icon--hide')
		btnSun.classList.toggle('bright-icon--show')
		scoreParagraph.classList.remove('spindle-rate--bright')
	}
}

btn.addEventListener('click', calculate)
questionBtn.addEventListener('click', showPopup)
btnMoon.addEventListener('click', darkMode)
btnSun.addEventListener('click', darkMode)
render()
// const calculate = () => {
// 	let text: string = diameter.value
// 	let kin: number = Number(kind.value)
// 	let dia: number = Number(diameter.value)
// 	let mat: number = Number(material.value)
// 	let boxScore: number = ((kin * 318) / dia) * mat

// 	scoreParagraph.textContent = `${boxScore.toFixed(0)}`

// 	errorText.textContent = ''
// 	scoreParagraph.style.visibility = 'visible'
// 	popUp.classList.remove('popup-show')
// 	questionBtn.classList.remove('question-mark--color')
// 	checkString(text)
// 	maxSpindle(boxScore)
// 	checkInf(dia, kin, mat)
// }
// const checkInf = (dia: number, kin: number, mat: number) => {
// 	if (!dia) {
// 		scoreParagraph.textContent = ''
// 	} else if (dia <= 0) {
// 		errorText.style.visibility = 'visible'
// 		errorText.textContent = 'Błąd średnicy narzędzia!'
// 		scoreParagraph.textContent = ''
// 	} else if (dia >= 125) {
// 		errorText.style.visibility = 'visible'
// 		errorText.textContent = 'Błąd średnicy narzędzia!'
// 		scoreParagraph.textContent = ''
// 	} else if (kin <= 0) {
// 		errorText.style.visibility = 'visible'
// 		errorText.textContent = 'Wypełnij parametry obróbki!'
// 		scoreParagraph.style.visibility = 'hidden'
// 	} else if (mat <= 0) {
// 		errorText.style.visibility = 'visible'
// 		errorText.textContent = 'Wypełnij parametry obróbki!'
// 		scoreParagraph.style.visibility = 'hidden'
// 	}
// }
// const checkString = (text: string) => {
// 	const re: RegExp = new RegExp('[^abc]')
// 	if (text.match(re)) {
// 	} else {
// 		errorText.style.visibility = 'visible'
// 		errorText.textContent = 'Błąd średnicy narzędzia!'
// 		scoreParagraph.style.visibility = 'hidden'
// 	}
// }

// const maxSpindle = (boxScore: number) => {
// 	if (boxScore >= 20000) {
// 		scoreParagraph.textContent = '20000'
// 	}
// }
// const showPopup = () => {
// 	popUp.classList.toggle('popup-show')
// 	questionBtn.classList.toggle('question-mark--color')
// }
// const darkMode = () => {
// 	if (body.getAttribute('data-mode') === 'light') {
// 		body.setAttribute('data-mode', 'dark')
// 		btnSun.classList.toggle('bright-icon--show')
// 		btnMoon.classList.toggle('dark-icon--hide')
// 		scoreParagraph.classList.add('spindle-rate--bright')
// 	} else {
// 		body.setAttribute('data-mode', 'light')
// 		btnMoon.classList.toggle('dark-icon--hide')
// 		btnSun.classList.toggle('bright-icon--show')
// 		scoreParagraph.classList.remove('spindle-rate--bright')
// 	}
// }

// btn.addEventListener('click', calculate)
// questionBtn.addEventListener('click', showPopup)
// btnMoon.addEventListener('click', darkMode)
// btnSun.addEventListener('click', darkMode)
