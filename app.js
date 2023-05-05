window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.getInfo = function () {
        return `${this.title} by ${this.author} has ${this.pages} pages.`;
    };
}

function addNewBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);

    const card = createBookCard(newBook);
    libraryDisplay.appendChild(card);
}

document.getElementById('add-book').addEventListener('click', function () {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;

    addNewBook(title, author, pages);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
});



const libraryDisplay = document.querySelector('.library-display');

function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-fillColor', 'p-6', 'border-2', 'border-black');

    const title = document.createElement('h2');
    title.textContent = book.title;
    title.classList.add('font-bold', 'text-center');

    const author = document.createElement('p');
    /* Using spans to separate bold font title from information text */
    const authorLabel = document.createElement('span');
    authorLabel.textContent = 'Author: ';
    authorLabel.classList.add('font-bold');
    author.appendChild(authorLabel);
    author.appendChild(document.createTextNode(book.author));

    const pages = document.createElement('p');
    const pagesLabel = document.createElement('span');
    pagesLabel.textContent = 'Number of pages: ';
    pagesLabel.classList.add('font-bold');
    pages.appendChild(pagesLabel);
    pages.appendChild(document.createTextNode(book.pages));

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    return card;
}


const form = document.querySelector('form');
const formToggle = document.querySelector('.book-form-toggle');

formToggle.classList.add('animate-bounce');
setTimeout(() => {
    formToggle.classList.remove('animate-bounce');
}, 1500);

formToggle.addEventListener('click', () => {
    if (formToggle.getAttribute('src') === './images/plus.png') {
        formToggle.setAttribute('src', './images/close.png');
        form.classList.remove('hidden');
        form.classList.add('fade-in');

    } else {
        formToggle.setAttribute('src', './images/plus.png');
        form.classList.add('hidden');
        formToggle.classList.add('animate-ping', 'duration-300');
    }
});


