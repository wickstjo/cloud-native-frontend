import axios from 'axios';
import { delivery as delivery_key } from '../keys.js';

// API CONFIG
const config = {
    headers: {
        "x-api-key": delivery_key
    }
}

// SUBMIT CALL
function submit({ user, order }) {
    return axios.post('https://7hxuxvgjn2.execute-api.eu-central-1.amazonaws.com/delivery', {
        user: user,
        order: order
    }, config)
}

export {
    submit
}