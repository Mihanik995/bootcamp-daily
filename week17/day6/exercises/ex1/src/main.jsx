import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from "./hooks/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContext>
            <App/>
        </ThemeContext>
    </StrictMode>,
)
