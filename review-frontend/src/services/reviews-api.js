import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';

function getAxios(endPoint) {
    return axios.get(baseURL + endPoint)
        .then(response => {
            console.log('getAxios: ' + JSON.stringify(response));

            return response.data})
    // .catch(error => console.log(JSON.stringify(error)));
}

function postAxios(endPoint, body) {
    return axios.post(baseURL + endPoint, body)
        .then(response => response.data)
        .catch(error => console.log(error));
}

function putAxios(endPoint, body) {
    return axios.put(baseURL + endPoint, body)
        .then(response => {
            console.log('putAxios: ' + JSON.stringify(response));

            return response.data})
        .catch(error => console.log(error));
}

function deleteAxios(endPoint, body) {
    return axios.delete(baseURL + endPoint, body)
        .then(response => response.data)
        .catch(error => console.log(error));
}

function getAllReviews() {
    return getAxios('reviews');
}

// get reviews by ISBN
function getReviewsByISBN(isbn) {
    const url = 'reviews/' + isbn;
    return getAxios(url);
}

function createNewReview(review) {
    return postAxios('review', review);
}

function updateReview(review) {
    return putAxios('review/' + review.id, review);
}

function deleteReview(review) {
    return deleteAxios('review/' + review.id, review);
}
export { getAllReviews, getReviewsByISBN, createNewReview, updateReview, deleteReview };