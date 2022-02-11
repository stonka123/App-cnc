const kind = document.querySelector('.kind')
const diameter = document.querySelector('.diameter')
const material = document.querySelector('.material')
const Btn = document.querySelector('.button')
const errorText = document.querySelector('.error-info')
const score = document.querySelector('.spindle-rate')
const options = document.querySelectorAll('.option')

const calculate = () => {
	const box = 3.14 * parseFloat(diameter.value)
	const drillHssScore = 25000 / box
	score.textContent = `${drillHssScore.toFixed(0)}`
}
Btn.addEventListener('click', calculate)
