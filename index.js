class BooksLibrary {
  constructor(books){
    this.books = books;
    this.form = document.getElementById("form");
    this.booksContainer = document.querySelector(".table-body");
    this.dateDisplay = document.querySelector(".current-datetime");
  }

  getBooksFromLocalStorage(){  //Retrieve books from local storage and diplay all when the page loads
    if(this.books.length > 0){
      document.getElementById("no-books").style.display = "none";
      this.books.forEach((book) => {
        this.showBook(book);
      })
    }
  }

  showBook(book){ //Method to used to display single book on the page
    document.getElementById("no-books").style.display = "none";
    this.booksContainer.innerHTML += `<tr class="book${book.bid}">
    <td>${book.title} <span class="book-author">by ${book.author}</span</td>
    <td class="button-cells"><button type="button" id = "${book.bid}" class="remove-button">Remove</button></td>
  </tr>`

  this.AddRemoveListerToButtons();
  }

  addBook(event){
    event.preventDefault();
    let bookId = Math.floor(Math.random() * 1000);
  
    let newBook = {
      title: document.getElementById("booktitle").value, 
      author: document.getElementById("bookauthor").value,
      bid: bookId
    };
  
    this.books.push(newBook);
    form.reset();
    this.showBook(newBook); 
    localStorage.setItem("books",JSON.stringify(books));
  }

  removeBook(bid){
    this.books = this.books.filter((book) => {
      console.log("bookID: " + book.bid);
      return book.bid != bid;
    })
    localStorage.setItem("books",JSON.stringify(this.books));
    let bookClass = ".book" + bid;
    this.booksContainer.removeChild(document.querySelector(bookClass));
    const noBooks = document.getElementById("no-books");
    this.books.length < 1 ? noBooks.style.display = "block" : noBooks.style.display = "none";
  }

  AddRemoveListerToButtons(){
    let removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        this.removeBook(e.target.id);
      });
    });
  }

  displayCurrentDateAndTime(){
    let date = new Date();
    this.dateDisplay.innerHTML = date.toLocaleString('en-US', {
      // weekday: 'short', // long, short, narrow
      day: 'numeric', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: 'long', // numeric, 2-digit, long, short, narrow
      hour: 'numeric', // numeric, 2-digit
      minute: 'numeric', // numeric, 2-digit
      second: 'numeric', // numeric, 2-digit
    })
  }

}

let books = JSON.parse(localStorage.getItem("books")) || [];
const booksObj = new BooksLibrary(books);
booksObj.displayCurrentDateAndTime();
booksObj.getBooksFromLocalStorage();
form.addEventListener('submit',booksObj.addBook.bind(booksObj));

window.setInterval(() => {
  booksObj.displayCurrentDateAndTime();
}, 1000)

function showSection(number) {
  switch(number) {
    case 1:
      document.getElementById("book-list-section").style.display = "flex";
      document.getElementById("add-book-section").style.display = "none";
      document.getElementById("contact-section").style.display = "none";
      break;
    case 2:
      document.getElementById("book-list-section").style.display = "none";
      document.getElementById("add-book-section").style.display = "flex";
      document.getElementById("contact-section").style.display = "none";
      break;
    case 3: 
      document.getElementById("book-list-section").style.display = "none";
      document.getElementById("add-book-section").style.display = "none";
      document.getElementById("contact-section").style.display = "flex";
      break;
    default:
      document.getElementById("book-list-section").style.display = "flex";
      document.getElementById("add-book-section").style.display = "none";
      document.getElementById("contact-section").style.display = "none";
  }
}

showSection(1);