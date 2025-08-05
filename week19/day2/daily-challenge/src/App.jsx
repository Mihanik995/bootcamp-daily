import './App.css'
import {useState} from "react";
import CategorySelector from "./components/CategorySelector.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
    const [currentCategory, setCurrentCategory] = useState('')

    return (
        <>
            <CategorySelector currentCategory={currentCategory}
                              setCurrentCategory={setCurrentCategory}
            />
            <TaskList currentCategory={currentCategory}/>
        </>
    )
}

export default App
