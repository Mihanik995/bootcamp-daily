import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoContext from "./hooks/ToDoContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToDoContext>
            <App/>
        </ToDoContext>
    </StrictMode>,
)
