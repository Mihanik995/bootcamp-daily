import {useState} from 'react'
import './App.css'
import {useToDoContext} from "./hooks/ToDoContext.jsx";
import ToDoPoint from "./components/ToDoPoint.jsx";

function App() {
    const {state, dispatch} = useToDoContext()
    const [text, setText] = useState('')
    const [filter, setFilter] = useState('all')

    return (
        <>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">Show All</option>
                <option value="done">Show Done</option>
                <option value="undone">Show Undone</option>
            </select>
            <ul>
                {state.filter(item => {
                    switch (filter) {
                        case 'all':
                            return true
                        case 'done':
                            return item.completed === true
                        case 'undone':
                            return item.completed === false
                    }
                }).map((item, index) => <ToDoPoint key={index} item={item}/>)}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: 'add', text: text})
            }}>
                <input type='text' onChange={(e) => setText(e.target.value)} value={text}/>
                <button type='submit'>Add New Task</button>
            </form>
        </>
    )
}

export default App
