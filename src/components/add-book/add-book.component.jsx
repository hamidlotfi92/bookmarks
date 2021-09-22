
//React
import React,{useState} from "react";

import FormInput from "../form-input/form-input.component";

//redux
import {connect } from 'react-redux';
import { addBook } from "../../redux/book/book.actions";

//components
import CustomButton from '../custom-button/custom-button.component';

//styles
import './add-book.styles.scss';



const AddBook = ({addBook}) => {
    const [book,setBookDetail] = useState({
        bookName: '',
        totalPageCount: '',
        pagesIRead: ''
    });
  
    const handleSubmit=  event=>{
        event.preventDefault();
        parseInt(totalPageCount)>=parseInt(pagesIRead) ? addBook(book) : alert("I'm  sure you read more than what a book contains, But please check the numbers again")
        
    }
   const {bookName, totalPageCount, pagesIRead} = book;
    
        
    
    
    const handleChange = event=>{
        const {name,value}=event.target;
        if(name === totalPageCount || name === pagesIRead){
            value = parseInt(value);
        }
        setBookDetail({...book,[name]:value});
        
    }

    return (
        <div className="add-book-container">
            <h2>New Bookmark</h2>
            <span> I want to manually add it</span>
            <form onSubmit={handleSubmit} >
                <FormInput type='text' name='bookName' value={bookName} handleChange={handleChange} lable="Title" required/>
                <FormInput type='number' name='totalPageCount' value={totalPageCount} min="0" handleChange={handleChange} lable="Total number of pages" />
                <FormInput type='number' min="0" name='pagesIRead' value={pagesIRead} handleChange={handleChange} lable="number of pages you have read" />
                <CustomButton type="submit">  Add Book</CustomButton>  
            </form>
            
            
        </div>
    )
}



const mapDispatchtoProps = dispatch => ({
    addBook:(bookName) => dispatch(addBook(bookName))
})


export default connect(null,mapDispatchtoProps)(AddBook);