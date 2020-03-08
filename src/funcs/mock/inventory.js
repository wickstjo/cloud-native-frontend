import inventory from './data/inventory';
import quantity_data from './data/true';
import { promisify } from '../misc';

// FETCH ALL PRODUCTS
function everything() {
    return promisify(inventory, 2)
}

function modify() {
    return promisify(quantity_data, 2)
}

export {
    everything,
    modify
}