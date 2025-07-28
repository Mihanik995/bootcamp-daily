import {useState} from "react";
import {useToDoContext} from "../hooks/ToDoContext.jsx";

export default function ({item}) {
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(item.text)
    const {dispatch} = useToDoContext()

    return (
        <li>
            <div className='li'>
                {edit
                    ? (
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            dispatch({type: 'edit', id: item.id, newText: text})
                            setEdit(false)
                        }}>
                            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                            <button type='submit'>Save</button>
                        </form>
                    )
                    : (
                        <>
                            <h2>{item.text}</h2>
                            <button onClick={() => setEdit(true)}>Edit</button>
                        </>
                    )}
                {!item.completed && (
                    <button
                        onClick={() => dispatch({type: 'mark-completed', id: item.id})}>
                        Mark Completed
                    </button>
                )}
                <button onClick={() => dispatch({type: 'remove', id: item.id})}>
                    Remove
                </button>
            </div>
        </li>
    )
}