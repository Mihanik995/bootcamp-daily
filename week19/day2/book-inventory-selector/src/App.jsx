import './App.css'
import {useState} from "react";
import {selectFantasyBooks, selectHorrorBooks, selectScienceFictionBooks} from "./features/books/bookSelectors.js";
import {useSelector} from "react-redux";

function App() {
    const [category, setCategory] = useState('fantasy')

    return (
        <>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="fantasy">Fantasy</option>
                <option value='science-fiction'>Science Fiction</option>
                <option value='horror'>Horror</option>
            </select>
            {(category === 'fantasy' && (
                useSelector(selectFantasyBooks).map(book => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                    </div>
                ))
            )) || (category === 'science-fiction' && (
                useSelector(selectScienceFictionBooks).map(book => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                    </div>
                )))) || (category === 'horror' && (
                useSelector(selectHorrorBooks).map(book => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                    </div>
                ))
            ))
            }
        </>
    )
}

export default App
