const fetchData = function (event) {
    event.preventDefault()
    const form = document.getElementById('form')
    const data = [...form.children].filter(tag => tag.tagName === 'INPUT')
        .reduce((acc, elem) => {
            acc[elem.name] = elem.value
            return acc
        }, {})

    document.getElementById('text').innerText = JSON.stringify(data)
}