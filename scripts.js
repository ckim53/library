const myLibrary = [];
 
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.unshift(newBook);
}

function createCard(newBook) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = `${newBook.title}`;
    card.style.backgroundColor = "powderBlue";
    card.style.color = "gray";
    
    card.addEventListener("click", function() {
        if (card.textContent == newBook.title) {
            card.textContent = "";
            card.style.backgroundColor = "steelBlue";
            card.style.color = "white";

            const author = document.createElement("p");
            const pages = document.createElement("p");
            const read = document.createElement("p");

            author.textContent = "by " + newBook.author;
            pages.textContent = newBook.pages + " pages";
            read.textContent = newBook.read ? "Read" : "Not Read Yet";

            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(read);
        }
        else {
            card.textContent = `${newBook.title}`;
            card.style.backgroundColor = "powderBlue";
            card.style.color = "gray";
        }
    });
    return card;
}

function displayBooks() {
    const myLib = document.querySelector("#cards");
    for (let i=0; i < myLibrary.length; i++) {
        //display card
        const card = createCard(myLibrary[i]);
        console.log(card.textContent);
        myLib.appendChild(card);
    }
}

addBookToLibrary("The Hobbit", "JR", 295, 0);
displayBooks();
addBookToLibrary("The Hobbit", "JR", 295, 0);
displayBooks();