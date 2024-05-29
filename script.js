const myLibrary = [];
const addBookButton = document.getElementById("add-btn");
const closeFormButton = document.getElementById("close-form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Functions
//-------------------------------------------------------
//Function to add books to the library
function addBookToLibrary() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("num-pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  // displayBooks();
}

function openForm() {
  document.getElementById("add-book-form").style.display = "block";
  document.getElementById("book-cards").style.display = "none";
}

function closeForm() {
  document.getElementById("add-book-form").style.display = "none";
  document.getElementById("book-cards").style.display = "flex";
}

//Event Listeners
addBookButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);

document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
