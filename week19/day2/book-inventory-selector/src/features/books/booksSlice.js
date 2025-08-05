import {createSlice} from "@reduxjs/toolkit";

export const booksSlice = createSlice({
    name: "books",
    initialState: [
        {id: 0, title: 'Haunted', author: 'Chuck Palahniuk', genre: 'horror'},
        {id: 1, title: 'Indian Burial Ground', author: 'Nick Medina', genre: 'horror'},
        {id: 2, title: 'The Midnight Library', author: 'Matt Haig', genre: 'fantasy'},
        {id: 3, title: 'Fourth Wing', author: 'Rebecca Yarros', genre: 'fantasy'},
        {id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'science-fiction'},
        {id: 5, title: 'Ready Player One', author: 'Ernest Cline', genre: 'science-fiction'}
    ]
})

export default booksSlice.reducer