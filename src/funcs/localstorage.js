// STORAGE KEYS
const cart_key = 'cart';
const session_key = 'session'

// INITIATE & FETCH STORAGE CONTENT
function init() {

    // FETCH STORAGE CONTENT
    let cart_storage = localStorage.getItem(cart_key);
    let session_storage = localStorage.getItem(session_key);

    // DEFAULT SESSION
    let session = {
        active: false,
        user: null
    }

    // IF CART KEY DOESNT EXIST
    if (cart_storage === null) {

        // CREATE EMPTY OBJECT
        cart_storage = {}

        // SAVE IT LOCALLY
        save_cart(cart_storage)

    // OTHERWISE, PARSE CONTENT
    } else { cart_storage = JSON.parse(cart_storage) }

    // IF SESSION KEY EXIST
    if (session_storage !== null) {

        // LOG USER IN
        session = {
            active: true,
            user: session_storage
        }
    }

    return {
        cart: cart_storage,
        session: session
    }
}

// SAVE SNAPSHOT OF CART
function save_cart(cart) {
    localStorage.setItem(cart_key, JSON.stringify(cart))
}

// SAVE LOGIN SESSION
function save_session(user) {
    localStorage.setItem(session_key, user)
    return user;
}

// REMOVE LOGIN SESSION
function remove_session() {
    localStorage.removeItem(session_key);
    return null;
}

// ADD/UPDATE ITEM TO/IN CART
function update({ data, cart }) {

    // CLONE & ADD THE KEY/VALUE
    cart = {
        ...cart,
        [data.id]: data.amount
    }

    // SAVE THE SNAPSHOT LOCALLY
    save_cart(cart)

    return cart;
}

// REMOVE ITEM FROM CART
function remove({ key, cart }) {

    // REMOVE THE KEY
    delete cart[key]

    // SAVE THE SNAPSHOT LOCALLY
    save_cart(cart)

    return cart;
}

// RESET CART
function reset() {
    save_cart({})
    return {}
}

export {
    init,
    update,
    remove,
    reset,
    save_session,
    remove_session
}