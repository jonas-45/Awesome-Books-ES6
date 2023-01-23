import BooksLibrary from './bookOperations.js';

// Retrieve books from local storage and diplay all when the page loads
export default function getBooksFromLocalStorage(books) {
  if (books.length > 0) {
    document.getElementById('no-books').style.display = 'none';
    books.forEach((book) => {
      new BooksLibrary().showBook(book);
    });
  }
}