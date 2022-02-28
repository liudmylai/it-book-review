import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';

function getAxios(endPoint) {
    return axios.get(baseURL + endPoint)
        .then(response => response.data)
        .catch(error => console.error(error));
}

function getAllReviews() {
    return getAxios('reviews');
}

export {getAllReviews};