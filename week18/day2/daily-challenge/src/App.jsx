import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {add} from "./features/to-do-list/toDoListSlice.js";
import ToDoPoint from "./components/ToDoPoint.jsx";
import {useState} from "react";

function App() {
    const planner = useSelector(state => state.toDoList.list)
    const dispatch = useDispatch();

    const [text, setText] = useState('')
    const [day, setDay] = useState('monday')

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
                {Object.entries(planner).map(([day, list]) => (
                    <>
                        <h2>{day.toUpperCase()}</h2>
                        <ul>
                            {list.map((item, index) => <ToDoPoint key={index} item={item} day={day}/>)}
                        </ul>
                    </>
                ))}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(add({text, day}))
                }}>
                    <input type='text' onChange={(e) => setText(e.target.value)} value={text}/>
                    <select onChange={(e) => setDay(e.target.value)} value={day}>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
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
