import {useDispatch} from "react-redux";
import {markCompleted, remove} from "../features/to-do-list/toDoListSlice.js";


export default function ({item, day}) {
    const dispatch = useDispatch();

    return (
        <li>
            <div className='li'>
                <h2>{item.text}</h2>
                {!item.completed && (
                    <button
                        onClick={() => dispatch(markCompleted({id: item.id, day}))}>
                        Mark Completed
                    </button>
                )}
                <button onClick={() => dispatch(remove({id: item.id, day}))}>
                    Remove
                </button>
            </div>
        </li>
    )
}