import axios from 'axios';
import keys from '../keys.json';

// FETCH INVENTORY OF ALL PRODUCTS
function inventory(product) {
    return axios.get('https://gljjr6hwrd.execute-api.eu-north-1.amazonaws.com/dev/inventory/' + product, {
        headers: {
            "x-api-key": keys.inventory
        }
    })
}

// FETCH ALL PRODUCTS
function products_foo() {
    return axios.get('https://bra2tww5y1.execute-api.eu-west-1.amazonaws.com/dev/products', {
        headers: {
            "x-api-key": keys.products
        }
    })
}

// FETCH ALL CUSTOMERS
function customers() {
    return axios.get('https://7hxuxvgjn2.execute-api.eu-central-1.amazonaws.com/dev/customers', {
        headers: {
            "x-api-key": keys.customers
        }
    })
}

export {
    inventory,
    products_foo,
    customers
}