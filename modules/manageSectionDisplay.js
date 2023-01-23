export function showSection(number) {
  console.log("section number: " + number);
  switch(number) {
    case 0:
      document.getElementById("book-list-section").style.display = "flex";
      document.getElementById("add-book-section").style.display = "none";
      document.getElementById("contact-section").style.display = "none";
      break;
    case 1:
      document.getElementById("book-list-section").style.display = "none";
      document.getElementById("add-book-section").style.display = "flex";
      document.getElementById("contact-section").style.display = "none";
      break;
    case 2: 
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