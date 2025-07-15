import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import BuggyCounter from "./components/BuggyCounter.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Simulation 1</h1>
            <p>In this simulation, one ErrorBoundary will keep two BuggyCounters.</p>
            <ErrorBoundary>
                <BuggyCounter/>
                <BuggyCounter/>
            </ErrorBoundary>
            <br/>
            <h1>Simulation 2</h1>
            <p>In this simulation, two ErrorBoundaries will keep one BuggyCounter each.</p>
            <ErrorBoundary>
                <BuggyCounter/>
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter/>
            </ErrorBoundary>
            <br/>
            <h1>Simulation 3</h1>
            <p>In this simulation, BuggyCounter won't be wrapped by ErrorBoundary.</p>
            <BuggyCounter/>
        </>
    )
}

export default App
