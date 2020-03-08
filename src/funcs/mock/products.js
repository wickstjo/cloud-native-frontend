import products from './data/products';
import remove_data from './data/true';
import { promisify } from '../misc';

// FETCH ALL PRODUCTS
function everything() {
    return promisify(products, 2)
}

function remove() {
    return promisify(remove_data, 2)
}

export {
    everything,
    remove
}