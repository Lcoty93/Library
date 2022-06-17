let myLibrary = [];

const title = document.querySelector('#title');
const author = document.querySelector('#author'); 
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');
const bookOutput = document.querySelector('#book');

submit.addEventListener('click', () => {
    // bookOutput.append(title.value + author.value + pages.value + read.checked);
    const userBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(userBook);
    // addBookToLibrary(userBook);
  });



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Prototype to save memory instead of having this as a method.
Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " +  this.pages + " pages " + ", " + this.read;
}

function addBookToLibrary(book) {
    myLibrary.push(this.book);
}

function printArray() {
    for(const book of myLibrary) {
        console.log(book);
    }
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet.');

// console.log(theHobbit.info());

// myLibrary.push(theHobbit);

printArray();
console.log(myLibrary);

