import {useSelector} from "react-redux";
import {selectTasksByCategory} from "../features/selectors.js";
import {deleteTask, markCompleted} from "../features/tasks/taskSlice.js";

export default function ({currentCategory}) {
    return (
        <ul>
            {useSelector(state => selectTasksByCategory(state, currentCategory)).map((task, index) => (
                <li key={index}>
                    {task.title}
                    {!currentCategory && `, category: ${task.category}`}
                    {!task.completed &&
                        <button onClick={() => dispatch(markCompleted(task.id))}>Done</button>}
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    )
}