let bookLibrary = [];

class Book {
    // the constructor
    constructor(author, title, pageNum, readStatus, extraInfo) {
        this.author = author;
        this.title = title;
        this.pageNum = pageNum;
        this.readStatus = readStatus;
        this.extraInfo = extraInfo;
    }
}

const container = document.querySelector('.container');

function addBookToLibrary(...info) {
    bookLibrary.push(new Book(...info));
}

function libraryDisplay() {
    for (let b = 0; b <= bookLibrary.length - 1; b++) {
        const id = `s${b}`;
        const body = document.querySelector('body');
        const table = document.createElement("table");
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const remove = document.createElement('button');
        remove.textContent = 'REMOVE';
        remove.classList.add('remove-button');
        remove.classList.add(id);
        const haveRead = document.createElement('button');
        haveRead.textContent = "Have read";
        haveRead.classList.add('read-button');
        haveRead.classList.add(id);
        td1.textContent = bookLibrary[b].author;
        td2.textContent = bookLibrary[b].title;
        td3.textContent = bookLibrary[b].pageNum;
        td4.textContent = bookLibrary[b].readStatus;
        td5.textContent = bookLibrary[b].extraInfo;
        body.appendChild(container);
        container.appendChild(table);
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(remove);
        tr.appendChild(haveRead);
        console.log(remove.classList);
        console.log(document.querySelector('.remove-button'));

    }
}
addBookToLibrary('JK Rowling', 'Harry Potter', 497, true, 'fun book');
// addBookToLibrary('Lord of the Rings');
// addBookToLibrary('Aragorn');

// libraryDisplay();

const btn = document.querySelector('.formBtn');

const log = document.querySelector('#log');

function logSubmit(event) {
    const input = document.querySelector('#book').value;
    console.log(input)
    log.textContent = input;
    event.preventDefault();
}

function receiveInput(event) {
    // console.clear();
    container.innerHTML = '';
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pageNum = document.querySelector('#pageNum').value;
    const readStatus = document.querySelector('#readStatus').value;
    const extraInfo = document.querySelector('#extraInfo').value;
    addBookToLibrary(author, title, pageNum, readStatus, extraInfo);
    event.preventDefault();
    libraryDisplay();
    console.log(bookLibrary);
}

btn.addEventListener('click', receiveInput);

// var removeBtn = document.querySelector('.remove-button');
// console.log(removeBtn.classList);
// console.log(removeBtn);


function removeListener(event) {
    const element = event.target;
    if (element.classList.contains('remove-button')) {
        console.log('button clicked!');
        console.log(element.classList);
        for (let cl of element.classList) {
            for (let book = 0; book <= bookLibrary.length - 1; book++) {
                if (`s${book}` === cl) {
                    bookLibrary.splice(book, 1);
                    container.innerHTML = '';
                    console.log(bookLibrary);
                    libraryDisplay();
                }
            }
        }
    }
};

document.addEventListener('click', removeListener);

function readingStatus(event) {
    const element = event.target;
    if (element.classList.contains('read-button')) {
        console.log('button clicked!');
        console.log(element.classList);
        for (let cl of element.classList) {
            for (let book = 0; book <= bookLibrary.length - 1; book++) {
                if (`s${book}` === cl) {
                    if (bookLibrary[book].readStatus === false) {
                        bookLibrary[book].readStatus = true;
                    } else {
                        bookLibrary[book].readStatus = false;
                    }
                    container.innerHTML = '';
                    console.log(bookLibrary);
                    libraryDisplay();
                }
            }
        }
    }
};

document.addEventListener('click', readingStatus);

// const removeBtn = document.querySelector('.remove-button');
// // console.log(removeBtn.classList);
// // console.log(removeBtn);

// removeBtn.addEventListener('click', () => {
//     for (let cl of removeBtn.classList) {
//         for (let book = 0; book <= bookLibrary.length - 1; book++) {
//             if (`.s${book}` === cl) {
//                 bookLibrary.splice(book, 1);
//                 console.log(bookLibrary);
//                 libraryDisplay();
//             }
//         }
//     }
// })