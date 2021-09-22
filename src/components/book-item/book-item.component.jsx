import React from "react";

import Lable from "../lable/lable.component";
import CustomButton from "../custom-button/custom-button.component";
import { increaseReadPage } from "../../redux/book/book.actions";
import { connect } from "react-redux";
import './book-item.styles.scss';

const BookItem = ({book,increasePage , ...props} ) => {
    const {bookName ,pagesIRead ,totalPageCount} = book;
    return (
        <div className="list-item" {...props} >
            <Lable className="lable" name="Name" value={bookName}></Lable>
            {
                totalPageCount ? 
                <div className="extras">
                        
                    <div className="meter">
                        <span style={{width:`${(pagesIRead/totalPageCount)*100}%`}}></span>
                        <p> I read: {pagesIRead}</p>
                    </div>
                    <p onClick={() => increasePage(book)}>Increase</p>
                </div> : null
            }
            
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    increasePage: (book) => dispatch(increaseReadPage(book)) 
})

export default React.memo(connect(null,mapDispatchToProps)(BookItem));
