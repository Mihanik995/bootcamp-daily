import {configureStore} from "@reduxjs/toolkit";
import booksReducer from '../features/books/booksSlice.js'

export default configureStore({
    reducer: {
        books: booksReducer
    }
})