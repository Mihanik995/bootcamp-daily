const APIKEY = 'fca_live_F5udj2Ubwp3BLOdIB5dJNCXuAq9vYaEHX4ETbIXe'

fetch(`https://api.freecurrencyapi.com/v1/currencies?apikey=${APIKEY}`)
    .then(response => response.json())
    .then(data => Object.values(data.data).forEach(elem => {
        document.getElementById('from').innerHTML +=
            `<option value="${elem.code}">${elem.code}: ${elem.name}</option>`
        document.getElementById('to').innerHTML +=
            `<option value="${elem.code}">${elem.code}: ${elem.name}</option>`
    }))
    .catch(e => console.warn(e))

const calculate = async function (event) {
    event.preventDefault()
    const to = event.target.to.value
    const from = event.target.from.value
    const amount = event.target.amount.value

    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}&base_currency=${from}`)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.data[to]
            document.getElementById('result').children[0]
                .innerText = `${(amount * exchangeRate).toFixed(2)} ${to}`
        })
        .catch(e => console.warn(e))
}