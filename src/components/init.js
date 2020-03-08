import { useContext, useEffect } from 'react';
import { Context } from "./context";
import '../interface/css/prompt.scss';

// import { everything as products } from '../funcs/api/products';
// import { everything as inventory } from '../funcs/api/inventory';
import { everything as products } from '../funcs/mock/products';
import { everything as inventory } from '../funcs/mock/inventory';

import { init as init_localstorage } from '../funcs/localstorage';

// PROMPT CONTAINER
function Init() {
   
   // GLOBAL STATE
   const { dispatch } = useContext(Context);

   // LOAD ONCE
   useEffect(() => {

      // CONTAINERS
      const inventory_container = {}
      const products_container = {}

      // FETCH PRODUCTS & INVENTORY DATA ASYNCHRONOUSLY
      Promise.all([
         products(),
         inventory()
      ]).then(results => {

         // DECONSTRUCT RESULTS
         const [ products, inventory ] = results;

         // IF EVERYTHING WENT OK
         if (products.status === 200 && inventory.status === 200) {

            // PARSE INVENTORY
            inventory.data.map(element =>
               inventory_container[element.productId] = element.totalAmount
            )

            // PARSE PRODUCTS
            products.data.map(element =>
               products_container[element.productId] = {
                  name: element.productName,
                  description: element.productDesc,
                  price: element.productPrice.replace(',', '.'),
                  available: inventory_container[element.productId]
               }
            )

            // SET PARSED PRODUCTS & CART DATA FROM LOCALSTORAGE
            dispatch({
               type: 'init',
               payload: {
                  products: products_container,
                  cart: init_localstorage()
               }
            })

         // OTHERWISE, SHOW ERROR
         } else {
            dispatch({
               type: 'add-message',
               payload: 'api error when fetching'
            })
         }
      })

   // eslint-disable-next-line
   }, [])

   return null;
}

export default Init;