const api_URL = 'https://api.quotable.io/random'

const quote = document.getElementById('quote')
const author = document.getElementById('author')



async function getData(api_URL) {
    const response = await fetch(api_URL)
    let data = await response.json(response)
    quote.innerHTML = data.content
    author.innerHTML = data.author
    console.log(data)
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by" + author.innerHTML, "Tweet Window", "width=600,height=300")
}



getData(api_URL)