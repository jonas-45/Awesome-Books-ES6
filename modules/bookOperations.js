import Book from './bookClass.js';

export default class BooksLibrary {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.booksContainer = document.querySelector('.table-body');
    this.form = document.getElementById('form');
  }

  addBook(event) {
    event.preventDefault();
    const title = document.getElementById('booktitle').value;
    const author = document.getElementById('bookauthor').value;
    const bookId = Math.floor(Math.random() * 1000);
    const book = new Book(title, author, bookId);
    const newBook = {
      title: book.title,
      author: book.author,
      bid: book.bookId,
    };

    this.books.push(newBook);
    this.form.reset();
    this.showBook(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  showBook(book) { // Method to used to display single book on the page
    document.getElementById('no-books').style.display = 'none';
    this.booksContainer.innerHTML += `<tr class="book${book.bid}">
    <td class="book-name">${book.title} <span class="book-author">by ${book.author}</span</td>
    <td class="button-cells"><button type="button" id = "${book.bid}" class="remove-button">Remove</button></td>
  </tr>`;

    this.addRemoveListerToButtons();
  }

  addRemoveListerToButtons() {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (window.confirm('Are you sure you want to remove this book from the library?')) {
          this.removeBook(e.target.id);
        }
      });
    });
  }

  removeBook(bid) {
    this.books = this.books.filter((book) => parseInt(book.bid, 10) !== parseInt(bid, 10));
    localStorage.setItem('book', JSON.stringify(this.books));
    const bookClass = `.book${bid}`;
    this.booksContainer.removeChild(document.querySelector(bookClass));
    const noBooks = document.getElementById('no-books');
    noBooks.style.display = this.books.length < 1 ? 'block' : 'none';
  }
}