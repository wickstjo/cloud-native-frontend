import axios from 'axios';
import keys from '../keys.json';

// FETCH ALL PRODUCTS
function everything() {
    return axios.get('https://bra2tww5y1.execute-api.eu-west-1.amazonaws.com/dev/products', {
        headers: {
            "x-api-key": keys.products
        }
    })
}

export {
    everything,
}