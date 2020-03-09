import axios from 'axios';
import keys from '../../keys.json';

// API CONFIG
const config = {
    headers: {
        "x-api-key": keys.delivery
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