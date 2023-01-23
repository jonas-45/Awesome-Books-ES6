export class Book {
  constructor(title,author,bookId){
    this.title = title;
    this.author = author;
    this.bookId = bookId
  }
}

export class BooksLibrary {
  constructor(){
    this.books = JSON.parse(localStorage.getItem("books")) || [];
    this.booksContainer = document.querySelector(".table-body");
  }

  addBook(event){
    event.preventDefault();
    const title = document.getElementById("booktitle").value;
    const author = document.getElementById("bookauthor").value;
    let bookId = Math.floor(Math.random() * 1000);
    const book = new Book(title,author,bookId);
    console.log("title:" + book.title + " author:" + book.author);
    let newBook = {
      title: book.title, 
      author: book.author,
      bid: book.bookId
    };
  
    this.books.push(newBook);
    form.reset();
    this.showBook(newBook); 
    localStorage.setItem("books",JSON.stringify(this.books));
  }

  showBook(book){ //Method to used to display single book on the page
    document.getElementById("no-books").style.display = "none";
    this.booksContainer.innerHTML += `<tr class="book${book.bid}">
    <td class="book-name">${book.title} <span class="book-author">by ${book.author}</span</td>
    <td class="button-cells"><button type="button" id = "${book.bid}" class="remove-button">Remove</button></td>
  </tr>`
  
  this.addRemoveListerToButtons();
  }

  addRemoveListerToButtons(){
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        confirm("Are you sure you want to remove this book from the library?") ? this.removeBook(e.target.id): false;
      });
    });
  }

  removeBook(bid){
    this.books = this.books.filter((book) => {
      //console.log("bookID: " + book.bid);
      return book.bid != bid;
    })
    localStorage.setItem("books",JSON.stringify(this.books));
    let bookClass = ".book" + bid;
    this.booksContainer.removeChild(document.querySelector(bookClass));
    const noBooks = document.getElementById("no-books");
    this.books.length < 1 ? noBooks.style.display = "block" : noBooks.style.display = "none";
  }
}