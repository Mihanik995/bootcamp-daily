import {createSelector} from "@reduxjs/toolkit";

const books = state => state.books;

export const selectHorrorBooks = createSelector([books], books => books.filter(book => book.genre === 'horror'))
export const selectFantasyBooks = createSelector([books], books => books.filter(book => book.genre === 'fantasy'))
export const selectScienceFictionBooks = createSelector([books], books => books.filter(book => book.genre === 'science-fiction'))