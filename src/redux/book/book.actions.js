import BookActionTypes from './book.action.types';

export const addBook = book => ({
    type: BookActionTypes.ADD_NEW_BOOK,
    payload: book
})

export const increaseReadPage = book => ({
    type: BookActionTypes.INCREASE_READ_PAGE,
    payload: book
})