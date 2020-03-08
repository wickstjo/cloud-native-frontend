import login_data from './data/true';
import register_data from './data/true';
import { promisify } from '../misc';

function login() {
    return promisify(login_data, 2)
}

function register() {
    return promisify(register_data, 2)
}

export {
    login,
    register
}