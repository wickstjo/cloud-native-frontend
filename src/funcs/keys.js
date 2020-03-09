import dotenv from 'dotenv';
dotenv.config()

// FETCH KEYS FROM ENV
const inventory = process.env.REACT_APP_INVENTORY;
const products = process.env.REACT_APP_PRODUCTS;
const customers = process.env.REACT_APP_CUSTOMERS;
const delivery = process.env.REACT_APP_DELIVERY;

export {
   inventory,
   products,
   customers,
   delivery
}