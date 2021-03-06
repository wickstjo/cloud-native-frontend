import axios from 'axios';
import { inventory as inventory_key } from '../keys.js';

// API CONFIG
const config = {
    headers: {
        "x-api-key": inventory_key
    }
}

// FETCH INVENTORY OF ALL PRODUCTS
function everything(product) {
    return axios.get('https://gljjr6hwrd.execute-api.eu-north-1.amazonaws.com/dev/inventory/' + product, config)
}

export {
    everything,
}