currencyOne = document.querySelector('#currency-one')
currencyTwo = document.querySelector('#currency-two')
amountOne = document.querySelector('.amount-one')
amountTwo = document.querySelector('.amount-two')
rateInfo = document.querySelector('.rate-info')
swapBtn = document.querySelector('.swap')
const calculate = () => {
	URL = `https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			amountTwo.value = (amountOne.value * data.rates[currencyTwo.value]).toFixed(2)
            rateInfo.textContent = `${amountOne.value} ${currencyOne.value} = ${amountTwo.value} ${currencyTwo.value}`
		})
}

const swap = () => {
	const currencyOneOld = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = currencyOneOld
	calculate()
}

amountOne.addEventListener('input', calculate)
currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
swapBtn.addEventListener('click', swap)
calculate()
