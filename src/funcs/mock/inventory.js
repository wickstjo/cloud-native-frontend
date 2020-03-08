import inventory from './data/inventory';
import { promisify } from '../misc';

// FETCH ALL PRODUCTS
function everything() {
    return promisify(inventory, 2)
}

export {
    everything,
}