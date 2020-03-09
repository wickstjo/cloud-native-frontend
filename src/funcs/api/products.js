import axios from 'axios';
import keys from '../../keys.json';

// API CONFIG
const config = {
    headers: {
        "x-api-key": keys.products
    }
}

// FETCH ALL PRODUCTS
function everything() {
    return axios.get('https://bra2tww5y1.execute-api.eu-west-1.amazonaws.com/dev/products', config)
}

// FETCH ALL PRODUCTS
function add({ name, description, price }) {
    return axios.post('https://bra2tww5y1.execute-api.eu-west-1.amazonaws.com/dev/products', {
        modelNumber: 'foo',
        productName: name,
        productDesc: description,
        productPrice: price
    }, config)
}

// FETCH ALL PRODUCTS
function remove({ product }) {
    return axios.delete('https://bra2tww5y1.execute-api.eu-west-1.amazonaws.com/dev/products/' + product, config)
}

export {
    everything,
    add,
    remove
}