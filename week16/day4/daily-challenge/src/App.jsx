import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [sum, setSum] = useState()

    return (
        <>
            <h1>Adding two numbers</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                setSum(+first + (+second))
            }}>
                <div>
                    <input type='number' value={first} onChange={(e) => setFirst(e.target.value)}/>
                    <input type='number' value={second} onChange={(e) => setSecond(e.target.value)}/>
                </div>
                <br/>
                <button type='submit'>Add Them!</button>
            </form>
            <h1>{sum !== undefined && sum}</h1>
        </>
    )
}

export default App
