const kind = document.querySelector('#kind')
const diameter = document.querySelector('.diameter')
const material = document.querySelector('.material')
const Btn = document.querySelector('.button')
const errorText = document.querySelector('.error-info')
const scoreParagraph = document.querySelector('.spindle-rate')
//KIND OPTION
const option = document.querySelectorAll('.option1')

const calculate = () => {
	let boxScore = ((kind.value * 318) / diameter.value) * material.value
	let boxe = (scoreParagraph.textContent = `${boxScore.toFixed(0)}`)
	errorText.textContent = ''
	// scoreParagraph.textContent = ''
	scoreParagraph.style.visibility = 'visible'
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

Btn.addEventListener('click', calculate)
