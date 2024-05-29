const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
  let userInput = prompt("enter a book")
  myLibrary.push(userInput)
}


function openForm() {
  document.getElementById("add-book-form").style.display = "block";
}

function closeForm() {
  document.getElementById("add-book-form").style.display = "none";
}