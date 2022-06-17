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
    const div = document.createElement('div');
    const titlePrint = document.createElement('p');
    const authorPrint = document.createElement('p');
    const pagesPrint = document.createElement('p');
    const readPrint = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    titlePrint.textContent = userBook.title + " ";
    authorPrint.textContent = userBook.author + " ";
    pagesPrint.textContent = userBook.pages + " ";
    readPrint.textContent = userBook.read;
    removeBtn.textContent = "Remove";

    bookOutput.appendChild(div);
    div.appendChild(titlePrint);
    div.appendChild(authorPrint);
    div.appendChild(pagesPrint);
    div.appendChild(readPrint);
    if(read.checked){
        readBtn.textContent = "Read";
        div.appendChild(readBtn);
    } else {
        readBtn.textContent = "Not read";
        div.appendChild(readBtn);
    }
    div.appendChild(removeBtn);

    titlePrint.classList.add('titlePrint');
    authorPrint.classList.add('authorPrint');
    pagesPrint.classList.add('pagesPrint');
    readPrint.classList.add('readPrint');
    readBtn.classList.add('readBtn');
    removeBtn.classList.add('btnRemove');

    
   div.classList.add('bookCard');

    
    removeBtn.onclick = function () {
        div.removeChild(titlePrint);
        div.removeChild(authorPrint);
        div.removeChild(pagesPrint);
        div.removeChild(readPrint);
        div.removeChild(readBtn);
        div.removeChild(removeBtn);
        
    }

    readBtn.onclick = function () {
        if(readBtn.textContent == "Read"){
            readBtn.textContent = "Not Read";
        } else {
            readBtn.textContent = "Read";
        }
    }

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


