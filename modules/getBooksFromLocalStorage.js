import { BooksLibrary } from "./classes.js";

//const libObj = 
export function getBooksFromLocalStorage(books,){  //Retrieve books from local storage and diplay all when the page loads
  if(books.length > 0){
    document.getElementById("no-books").style.display = "none";
    books.forEach((book) => {
      new BooksLibrary().showBook(book);
    })
  }
}