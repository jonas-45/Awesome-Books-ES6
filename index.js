import showSection from './modules/manageSectionDisplay.js';
import BooksLibrary from './modules/bookOperations.js';
import { form } from './modules/dom.js';
import getBooksFromLocalStorage from './modules/getBooksFromLocalStorage.js';
import displayCurrentDateAndTime from './modules/displayDateAndTime.js';

// Add click listener to nav menu items
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showSection(index);
  });
});

// show datetime
displayCurrentDateAndTime();

// Show main section based on which menu item is clicked
showSection(0);

const libraryObj = new BooksLibrary(); // create BooksLibrary class object

getBooksFromLocalStorage(libraryObj.books); // Retrieve all books from local storage and diplay it.

// Add submit listener to add book form
form.addEventListener('submit', (event) => libraryObj.addBook(event));

// Update time by the second
window.setInterval(() => {
  displayCurrentDateAndTime();
}, 1000);
