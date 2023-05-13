window.addEventListener('DOMContentLoaded', () => {});

const library = [];
const libraryDisplay = document.querySelector('.library-display');

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  createBookCard() {
    const card = document.createElement('div');
    card.classList.add(
      'card',
      'flex',
      'relative',
      'flex-col',
      'bg-fillColor',
      'p-6',
      'border-2',
      'border-black'
    );

    const title = document.createElement('h2');
    title.textContent = this.title;
    title.classList.add('font-bold', 'text-center', 'mb-3');

    const author = document.createElement('p');
    const authorLabel = document.createElement('span');
    authorLabel.textContent = 'Author: ';
    authorLabel.classList.add('font-bold');
    author.appendChild(authorLabel);
    author.appendChild(document.createTextNode(this.author));

    const pages = document.createElement('p');
    const pagesLabel = document.createElement('span');
    pagesLabel.textContent = 'Number of pages: ';
    pagesLabel.classList.add('font-bold');
    pages.appendChild(pagesLabel);
    pages.appendChild(document.createTextNode(this.pages));

    const status = document.createElement('p');
    const statusLabel = document.createElement('span');
    statusLabel.textContent = 'Status: ';
    statusLabel.classList.add('font-bold');
    status.appendChild(statusLabel);
    status.appendChild(document.createTextNode(this.status));

    const statusBtn = document.createElement('button');
    statusBtn.textContent = 'Status Toggle';
    statusBtn.classList.add(
      'h-10',
      'mt-3',
      'mb-5',
      'bg-secondaryColor',
      'rounded-full',
      'p-1',
      'hover:scale-110',
      'hover:bg-primaryColor',
      'transition',
      'ease-in',
      'duration-400'
    );

    statusBtn.addEventListener('click', () => {
      const newStatus = this.status === 'Read' ? 'Unread' : 'Read';
      this.status = newStatus;
      status.textContent = '';
      statusLabel.textContent = 'Status: ';
      statusLabel.classList.add('font-bold');
      status.appendChild(statusLabel);
      status.appendChild(document.createTextNode(this.status));
    });

    const deleteBtn = document.createElement('img');
    deleteBtn.setAttribute('src', './images/delete.png');
    deleteBtn.classList.add(
      'absolute',
      'right-0',
      'bottom-0',
      'h-10',
      'w-10',
      'mt-3',
      'hover:scale-110'
    );

    deleteBtn.addEventListener('click', () => {
      const index = library.indexOf(this);
      library.splice(index, 1);
      card.remove();
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(statusBtn);
    card.appendChild(deleteBtn);

    return card;
  }

  addNewBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const statusInput = document.getElementById('status');

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const status = statusInput.value;

    if (title === '' || author === '' || pages === '' || status === '') {
      return alert('All fields are required');
    }

    const newBook = new Book(title, author, pages, status);
    library.push(newBook);

    const card = newBook.createBookCard();
    libraryDisplay.appendChild(card);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput.value = '';
  }
}

const book = new Book();

// Form submission event listener with validation check
document.getElementById('add-book').addEventListener('click', (event) => {
  event.preventDefault();
  book.addNewBook();
});

// Open / Close form animation
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
  }
});
