//thi component gets the liist of books and shows them 

//react
import React from "react";

import Lable from "../lable/lable.component";

//redux
import { selectBookList } from "../../redux/book/book.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { increaseReadPage } from "../../redux/book/book.actions";

//components
import BookItem from'../book-item/book-item.component'


//styles 
import './book-list.styles.scss';


const BookList = ({Books, increasePage}) => {
    return(
        <div className="book-list-conainer">
        <h2>Books to read</h2>
        <div className="list">
           
            {
                Books ?
                    Books.map( book =>
                        <BookItem key={book.bookName} book={book}></BookItem>
                          ) : null

            }
            
            
            
        </div>
    </div>
    )
    
}

const mapStateToProps = createStructuredSelector({
    Books: selectBookList
})



export default connect(mapStateToProps)(BookList);