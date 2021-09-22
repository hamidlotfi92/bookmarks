export const addBookToLibrary = (currentBooks, bookToAdd) => {
    const existInLibrary = currentBooks.find(book => book.bookName === bookToAdd.bookName);
    if(existInLibrary){
        return currentBooks
    }
    return [...currentBooks, bookToAdd]
}


export const increasePage =(currentBooks, bookToIncrease) =>{
    return currentBooks.map( book => book === bookToIncrease ? (book.pagesIRead <book.totalPageCount ? {...book,pagesIRead :parseInt(book.pagesIRead)+1} : book) : book)
}