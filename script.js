const myLibrary = [];
const addBookButton = document.getElementById("add-btn");
const closeFormButton = document.getElementById("close-form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
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
  displayBooks();
}

//Function to hide the book-cards and show the form
function openForm() {
  document.getElementById("add-book-form").style.display = "block";
  document.getElementById("book-cards").style.display = "none";
}

//Function to hide the form and show the book-cards
function closeForm() {
  document.getElementById("add-book-form").style.display = "none";
  document.getElementById("book-cards").style.display = "flex";
}

//Function to add the books to the html from the myLibrary array
function displayBooks() {
  const libraryDisplay = document.getElementById("book-cards");
  libraryDisplay.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookCardDisplay = document.createElement("div");
    bookCardDisplay.innerHTML = `
      <div class="card">
        <span class="title-txt">${book.title}</span>
        <span class="author-txt">by: ${book.author}</span>
        <span class="pages-txt">${book.pages}</span>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">${book.read ? "Read" : "Not Read"}</button>
        <button class="remove-book-btn">Delete</button>
      </div>
      `;
    libraryDisplay.appendChild(bookCardDisplay);
    document.getElementById("book-form").reset();
  }
}

//Function to toggle the read button on the book card
function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBooks();
}

//Function to delete a book when delete button is clicked
function deleteBook(index) {
  myLibrary.splice(index, 1)
  displayBooks();
}

//Event Listeners
addBookButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);

document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  closeForm();
});

