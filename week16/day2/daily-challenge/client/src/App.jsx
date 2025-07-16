import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServerForm from "./components/ServerForm.jsx";

function App() {
    const [response, setResponse] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/api/hello')
            .then(res => res.json())
            .then(data => setResponse(data))
    }, []);

    return (
        <>
            <h1>{!!response && response.message}</h1>
            <hr/>
            <ServerForm/>
        </>
    )
}

export default App
