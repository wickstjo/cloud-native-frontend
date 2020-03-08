import delivery from './data/true';
import { promisify } from '../misc';

// FETCH ALL PRODUCTS
function submit() {
    return promisify(delivery, 2)
}

export {
    submit,
}