import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useTheme} from "./hooks/ThemeContext.jsx";

function App() {
    const themeContext = useTheme()

    return (
        <div className={themeContext.theme}
        style={{padding: '20px 40px'}}>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className={themeContext.theme}
                    onClick={() => themeContext.setTheme(themeContext.theme !== 'dark' ? 'dark' : 'light')}>
                    {themeContext.theme}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
