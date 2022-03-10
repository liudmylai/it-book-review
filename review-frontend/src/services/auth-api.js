import axios from 'axios';

const baseURL = 'https://it-book-review.herokuapp.com/api/';

function getAxios(endPoint, config) {
    return axios.get(baseURL + endPoint, config)
        .then(response => response.data);
}

// returning auth token for Basic authentication
function createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password);
}

// processing user login
function login(username, password) {
    // The Authorization request header contains the Base64-encoded username and password, seprated by a colon. 
    // When handling the request, the server decodes the login details and checks if the user can access the requested content.
    const config = {
        headers: {
            // Send Authorization header to perform Basic authentication
            // https://datatracker.ietf.org/doc/html/rfc7617
            Authorization: createBasicAuthToken(username, password),
            // Disable 'WWW-Authenticate: Basic' header in Spring Boot 401 response
            // https://stackoverflow.com/a/37766509
            'X-Requested-With': 'XMLHttpRequest'
        }
    }
    return getAxios('auth', config);
}
// using sessionStorage to store info about authenticated user
function registerSuccessfulLogin(username) {
    sessionStorage.setItem('authenticatedUser', username);
}

// removing info about authenticated user from sessionStorage to emulate logout
function logout() {
    sessionStorage.removeItem('authenticatedUser');
}

// checking if user is authenticated or not
function isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return (user !== null);
}

export { login, logout, isUserLoggedIn, registerSuccessfulLogin };