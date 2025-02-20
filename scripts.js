const myLibrary = [];

class Book {
    constructor(title, author, pages, read, data){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.data = data;
    }

    removeBook() {
        myLibrary[this.data] = null;
    }

    toggleRead() {
        this.read = this.read ? false : true;
    }
}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const bookForm = document.getElementById("book-form");

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[id="read"]:checked') ? true : false;

    console.log("Title: " + title);
    console.log("Author: " + author);
    console.log("Pages: " + pages);
    console.log("Have read: " + read);

    addBookToLibrary(title, author, pages, read);
    document.getElementById('book-form').reset();
    dialog.close();
});

function displayBooks() {
    const myLib = document.querySelector("#cards");
    while (myLib.firstChild) {
        myLib.removeChild(myLib.firstChild);
    }

    for (let i=0; i < myLibrary.length; i++) {
        if (myLibrary[i]) {
            const card = createCard(myLibrary[i]);
            myLib.appendChild(card);
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    console.log("adding book");
    newBook = new Book(title, author, pages, read, myLibrary.length);
    myLibrary.push(newBook);
    displayBooks();
}

function createCard(newBook) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = `${newBook.title}`;
    card.style.backgroundColor = "powderBlue";
    card.style.color = "gray";

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove Book";
    removeButton.addEventListener('click', () => {newBook.removeBook(); displayBooks();});

    const toggleRead = document.createElement("button");
    toggleRead.classList.add("toggle-read");
    toggleRead.textContent = "Change Read Status";
    toggleRead.addEventListener('click', () => {newBook.toggleRead(); displayBooks();});
   
    const bookInfo = document.createElement("div");
    
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    author.textContent = "by " + newBook.author;
    pages.textContent = newBook.pages + " pages";
    read.textContent = newBook.read ? "Read" : "Not Read Yet";

    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
    bookInfo.appendChild(read);
    card.appendChild(bookInfo);
    card.appendChild(toggleRead);
    card.appendChild(removeButton);
    return card;
}

