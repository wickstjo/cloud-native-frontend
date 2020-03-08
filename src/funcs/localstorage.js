const key = 'cart';

// INITIATE & FETCH STORAGE CONTENT
function init() {

    // FETCH STORAGE CONTENT
   let storage = localStorage.getItem(key);

   // IF STORAGE KEY DOESN'T EXIST
   if (storage === null) {

        // CREATE EMPTY OBJECT
        storage = {}

        // SAVE IT LOCALLY
        save(storage)

    // OTHERWISE, PARSE & FETCH CONTENT
    } else { storage = JSON.parse(storage) }

    return storage;
}

// SAVE DATA LOCALLY
function save(cart) {
    localStorage.setItem(key, JSON.stringify(cart))
}

// ADD/UPDATE ITEM TO/IN CART
function update({ data, cart }) {

    // CLONE & ADD THE KEY/VALUE
    cart = {
        ...cart,
        [data.id]: data.amount
    }

    // SAVE THE SNAPSHOT LOCALLY
    save(cart)

    return cart;
}

// REMOVE ITEM FROM CART
function remove({ key, cart }) {

    // REMOVE THE KEY
    delete cart[key]

    // SAVE THE SNAPSHOT LOCALLY
    save(cart)

    return cart;
}

// RESET CART
function reset() {
    save({})
    return {}
}

export {
    init,
    update,
    remove,
    reset
}