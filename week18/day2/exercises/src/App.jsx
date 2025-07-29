import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {add} from "./features/to-do-list/toDoListSlice.js";
import ToDoPoint from "./components/ToDoPoint.jsx";
import {useState} from "react";

function App() {
    const list = useSelector(state => state.toDoList.list)
    const dispatch = useDispatch();

    const [text, setText] = useState('')

    return (
        <>
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
                <ul>
                    {list.map((item, index) => <ToDoPoint key={index} item={item}/>)}
                </ul>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(add(text))
                }}>
                    <input type='text' onChange={(e) => setText(e.target.value)} value={text}/>
                    <button type='submit'>Add New Task</button>
                </form>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
