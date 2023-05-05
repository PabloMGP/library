window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  
let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.getInfo = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages.`;
      };
    }

function addNewBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}


document.getElementById("add-book").addEventListener("click", function() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
  
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
  
    addNewBook(title, author, pages);

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
  });

 


