import {useState} from 'react'
import './App.css'
import quotes from './assets/quotes.json'

function App() {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])

    function changeQuote(e) {
        e.preventDefault()
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }

    return (
        <>
            <div className="Quote">
                <h1>{quote.quote}</h1>
                <p>{quote.author}</p>
                <button onClick={changeQuote}>Change Quote</button>
            </div>
        </>
    )
}

export default App
