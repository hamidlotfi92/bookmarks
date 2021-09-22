import BookActionTypes from "./book.action.types";
import { addBookToLibrary, increasePage } from "./Books.utils";

const INITIAL_STATE= {
    bookList: [
        
    ]
}

const bookReducer =(state=INITIAL_STATE, action) => {
    switch(action.type){
        case BookActionTypes.ADD_NEW_BOOK:
            return{
                ...state,
               bookList: addBookToLibrary(state.bookList,action.payload)
            }
        case BookActionTypes.INCREASE_READ_PAGE:
            return{
                ...state,
                bookList: increasePage(state.bookList, action.payload)
            }
        default:
             return state
    }
}


export default bookReducer;