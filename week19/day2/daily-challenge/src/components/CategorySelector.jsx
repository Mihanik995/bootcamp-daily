import {addCategory} from "../features/categories/categorySlice.js";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../features/tasks/taskSlice.js";

export default function ({currentCategory, setCurrentCategory}) {
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()

    const [categoryAdder, setCategoryAdder] = useState(false)
    const [taskAdder, setTaskAdder] = useState(false)
    const [text, setText] = useState('')

    return (
        <>
            {categoryAdder
                ? (
                    <div>
                        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                        <button onClick={() => {
                            dispatch(addCategory({title: text.toLowerCase()}))
                            setText('')
                            setCategoryAdder(false)
                        }}>
                            Add
                        </button>
                    </div>
                )
                : taskAdder
                    ? (
                        <div>
                            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                            <button onClick={() => {
                                dispatch(addTask({
                                    title: text.toLowerCase(),
                                    category: currentCategory,
                                }))
                                setText('')
                                setTaskAdder(false)
                            }}>
                                Add Task
                            </button>
                        </div>
                    )
                    : (
                    <div>
                        <span>Categories: </span>
                        <select value={currentCategory}
                                onChange={(e) => setCurrentCategory(e.target.value)}>
                            <option value=''>all</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.title}>{category.title}</option>
                            ))}
                        </select>
                        <button onClick={() => {
                            setCategoryAdder(true)
                        }}>
                            Add Category
                        </button>
                        {currentCategory && (
                            <button onClick={() => setTaskAdder(true)}>
                                Add Task
                            </button>
                        )}
                    </div>
                )
            }
        </>
    )
}