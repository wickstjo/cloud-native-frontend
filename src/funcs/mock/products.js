import products from './data/products';
import { promisify } from '../misc';

// FETCH ALL PRODUCTS
function everything() {
    return promisify(products, 2)
}

export {
    everything,
}