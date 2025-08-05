import './App.css'
import {useState} from "react";
import BookList from "./components/BookList.jsx";

function App() {
    const [category, setCategory] = useState('all')

    return (
        <>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value='all'>All</option>
                <option value='fantasy'>Fantasy</option>
                <option value='science-fiction'>Science Fiction</option>
                <option value='horror'>Horror</option>
            </select>
            <BookList category={category}/>
        </>
    )
}

export default App
