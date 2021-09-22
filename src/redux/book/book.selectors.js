import {createSelector} from "reselect";

const selectBook = state => state.book;

export const selectBookList = createSelector([selectBook], (book) => book.bookList)
