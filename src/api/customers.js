import axios from 'axios';
import keys from '../keys.json';

// FETCH ALL CUSTOMERS
function everything() {
    return axios.get('https://7hxuxvgjn2.execute-api.eu-central-1.amazonaws.com/dev/customers', {
        headers: {
            "x-api-key": keys.customers
        }
    })
}

function login() {
}

function register(body) {
    return axios.post('https://7hxuxvgjn2.execute-api.eu-central-1.amazonaws.com/dev/customers', {
        headers: {
            "x-api-key": keys.customers
        }
    })
}

export {
    everything,
    login,
    register
}