import {
    selectBooks,
    selectFantasyBooks,
    selectHorrorBooks,
    selectScienceFictionBooks
} from "../features/books/bookSelectors.js";
import {useSelector} from "react-redux";

export default function ({category}) {
    const books = useSelector(
        category === 'horror'
            ? selectHorrorBooks
            : category === 'fantasy'
                ? selectFantasyBooks
                : category === 'science-fiction'
                    ? selectScienceFictionBooks
                    : category === 'all'
                        ? selectBooks
                        : null
    )

    return (
        <>
            {!!books && books.map(book => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <h4>{book.author}</h4>
                </div>
            ))}
        </>
    )
}