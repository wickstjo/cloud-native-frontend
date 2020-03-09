import axios from 'axios';
import hash from 'sha256';
import { customers as customers_key } from '../keys.js';

// API CONFIG
const config = {
    headers: {
        "x-api-key": customers_key
    }
}

// LOGIN CALL
function login({ email, password }) {
    return axios.post('https://7hxuxvgjn2.execute-api.eu-central-1.amazonaws.com/dev/login', {
        email: email,
        password: hash(password)
    }, config)
}

// REGISTER CALL
function register({ email, password, fname, lname, address }) {
    return axios.post('https://7hxuxvgjn2.execute-api.eu-central-1.amazonaws.com/dev/customer', {
        email: email,
        password: hash(password),
        firstname: fname,
        lastname: lname,
        address: address
    }, config)
}

export {
    login,
    register
}