import { useContext, useEffect } from 'react';
import { Context } from "./context";
import '../interface/css/prompt.scss';

//import { products, inventory } from '../funcs/api';
import { init } from '../funcs/localstorage';

import mock_inventory from '../mock/inventory.json';
import mock_products from '../mock/products.json';

// PROMPT CONTAINER
function Init() {
   
   // GLOBAL STATE
   const { dispatch } = useContext(Context);

   // LOAD ONCE
   useEffect(() => {

      // CONTAINERS
      const inventory_container = {}
      const products_container = {}

      // PARSE INVENTORY
      mock_inventory.data.map(element =>
         inventory_container[element.productId] = element.totalAmount
      )

      // PARSE PRODUCTS
      mock_products.data.map(element =>
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
            cart: init()
         }
      })

      /* // FETCH ALL PRODUCTS
      products().then(response => {

         // IF EVERYTHING WENT OK
         if (response.status === 200) {

            // LOOP THROUGH & PUSH TO CONTAINER
            response.data.forEach(element => {
               container[element.productId] = {
                  name: element.productName,
                  description: element.productDesc,
                  price: element.productPrice.replace(',', '.')
               }
            })
      
            // SET PARSED PRODUCTS & CART DATA FROM LOCALSTORAGE
            dispatch({
               type: 'init',
               payload: {
                  products: container,
                  cart: init()
               }
            })
         
         // OTHERWISE, SHOW ERROR
         } else { console.log('PRODUCT API ERROR') }
      }) */

   // eslint-disable-next-line
   }, [])

   return null;
}

export default Init;