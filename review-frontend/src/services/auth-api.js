import axios from 'axios';

const baseURL = 'http://localhost:8080/';

function postAxios(endPoint, body) {
    return axios.post(baseURL + endPoint, {credentials: 'same-origin'}, body)
        .then(response => response.data)
        .catch(error => console.error(error));
}

function login(body) {
    return postAxios('login', body);
}

export { login };