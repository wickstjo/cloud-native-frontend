import axios from 'axios';
import keys from '../keys.json';

// API CONFIG
const config = {
    headers: {
        "x-api-key": keys.inventory
    }
}

// FETCH INVENTORY OF ALL PRODUCTS
function everything(product) {
    return axios.get('https://gljjr6hwrd.execute-api.eu-north-1.amazonaws.com/dev/inventory/' + product, config)
}

export {
    everything,
}