import delivery from './data/delivery';
import { promisify } from '../misc';

// FETCH ALL PRODUCTS
function submit() {
    return promisify(delivery, 2)
}

export {
    submit,
}