// console.log("Hello, World")
//Variables
const newBookButton = document.querySelector("#new-book-button");
const newForm = document.querySelector("#new-form")
const submitButton = document.querySelector("#submit")

newBookButton.addEventListener("click", () => {
    newForm.style.display = "flex";
})
const myLibrary = [];

function Book(title, author, page, read) {
    this.title = title
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let page = document.querySelector("#page").value;
    let read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, page, read);
    myLibrary.push(newBook)

}
newForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)
})  