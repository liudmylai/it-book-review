import axios from "axios";
// Third party API
const baseURL = 'https://api.itbook.store/1.0/';

function getAxios(endPoint) {
    return axios.get(baseURL + endPoint)
        .then(response => response.data)
        .catch(error => console.log(error));
}

// search books by title, author, ISBN or keywords
function searchBooks(query, page) {
    const url = 'search/' + query + (page ? '/' + page : '');
    return getAxios(url);
}

// get new releases books
function getNewBooks() {
    return getAxios('new');
}

// get book details by ISBN
function getBookByISBN(isbn) {
    const url = 'books/' + isbn;
    return getAxios(url);
}

export {searchBooks, getNewBooks, getBookByISBN};