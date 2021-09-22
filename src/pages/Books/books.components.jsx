//react
import React from "react";

//components
import AddBook from '../../components/add-book/add-book.component';
import BookList from "../../components/book-list/book-list.component";

//styles
import './books.styles.scss';


const Books = ()=> (
    <div className="book-section-container">
        <BookList />
        <AddBook />
    </div>
)

export default Books;