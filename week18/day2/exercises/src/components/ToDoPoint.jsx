import {useDispatch} from "react-redux";
import {markCompleted, remove} from "../features/to-do-list/toDoListSlice.js";


export default function ({item}) {
    const dispatch = useDispatch();

    return (
        <li>
            <div className='li'>
                <h2>{item.text}</h2>
                {!item.completed && (
                    <button
                        onClick={() => dispatch(markCompleted(item.id))}>
                        Mark Completed
                    </button>
                )}
                <button onClick={() => dispatch(remove(item.id))}>
                    Remove
                </button>
            </div>
        </li>
    )
}