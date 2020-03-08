import axios from 'axios';
import keys from '../keys.json';

// FETCH INVENTORY OF ALL PRODUCTS
function everything(product) {
    return axios.get('https://gljjr6hwrd.execute-api.eu-north-1.amazonaws.com/dev/inventory/' + product, {
        headers: {
            "x-api-key": keys.inventory
        }
    })
}

export {
    everything,
}