import axios from 'axios';

const baseURL = 'https://it-book-review.herokuapp.com/api/';

function getAxios(endPoint, config) {
    return axios.get(baseURL + endPoint, config)
        .then(response => response.data);
}

function createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password);
}

function login(username, password) {
    // The Authorization request header contains the Base64-encoded username and password, seprated by a colon. 
    // When handling the request, the server decodes the login details and checks if the user can access the requested content.
    const config = {
        headers: {
            Authorization: createBasicAuthToken(username, password),
            // Disable 'WWW-Authenticate: Basic' header in Spring Boot 401 response
            // https://stackoverflow.com/a/37766509
            'X-Requested-With': 'XMLHttpRequest'
        }
    }

    return getAxios('auth', config);
}

function registerSuccessfulLogin(username) {
    sessionStorage.setItem('authenticatedUser', username);
}

function logout() {
    sessionStorage.removeItem('authenticatedUser');
}

function isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return (user !== null);
}

export { login, logout, isUserLoggedIn, registerSuccessfulLogin };