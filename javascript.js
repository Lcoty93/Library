let myLibrary = [];


const title = document.querySelector('#title');
const author = document.querySelector('#author'); 
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const readIt = document.querySelector('#readIt');
const submit = document.querySelector('#submit');
const addBookBtn = document.querySelector('#addBookBtn');
const bookOutput = document.querySelector('#book');

title.hidden = true;
author.hidden = true;
pages.hidden = true;
read.hidden = true;
readIt.hidden = true;
submit.hidden = true;


addBookBtn.addEventListener('click', () => {
    unHide();
})

submit.addEventListener('click', () => {
    const userBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(userBook);

    printArray(userBook);
    hide();
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

function printArray(userBook) {
    const titlePrint = document.createElement('p');
    const authorPrint = document.createElement('p');
    const pagesPrint = document.createElement('p');
    const readPrint = document.createElement('p');
    const removeBtn = document.createElement('button');

    titlePrint.textContent = userBook.title + " ";
    authorPrint.textContent = userBook.author + " ";
    pagesPrint.textContent = userBook.pages + " ";
    readPrint.textContent = userBook.read;
    removeBtn.textContent = "Remove";

    bookOutput.appendChild(titlePrint);
    bookOutput.appendChild(authorPrint);
    bookOutput.appendChild(pagesPrint);
    bookOutput.appendChild(readPrint);
    bookOutput.appendChild(removeBtn);

}

function hide() {
title.hidden = true;
author.hidden = true;
pages.hidden = true;
read.hidden = true;
readIt.hidden = true;
submit.hidden = true;

addBookBtn.hidden = false;
}

function unHide() {
    title.hidden = false;
    author.hidden = false;
    pages.hidden = false;
    read.hidden = false;
    readIt.hidden = false;
    submit.hidden = false;
    
    addBookBtn.hidden = true;
}

