const kind = document.querySelector('.kind')
const diameter = document.querySelector('.diameter')
const material = document.querySelector('.material')
const Btn = document.querySelector('.button')
const errorText = document.querySelector('.error-info')
const score = document.querySelector('.spindle-rate')
const options = document.querySelectorAll('.option')

const calculate = () => {
	if (options.value === '1') {
		const box = 3.14 * parseFloat(diameter.value)
		const totalyScore = 25000 / box
		score.textContent = `${totalyScore.toFixed(0)}`
	} else {
		return
	}
}

// const calculate = () => {
// 	const box = 3.14 * parseFloat(diameter.value)
// 	const totalyScore = 25000 / box
// 	score.textContent = `${totalyScore.toFixed(0)}`
// }

Btn.addEventListener('click', calculate)
