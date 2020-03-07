import { useContext, useEffect } from 'react';
import { Context } from "./context";
import '../interface/css/prompt.scss';

import { products } from '../funcs/api';
import { init } from '../funcs/localstorage';

// PROMPT CONTAINER
function Init() {
   
   // GLOBAL STATE
   const { dispatch } = useContext(Context);

   // LOAD ONCE
   useEffect(() => {

      // CONTAINER
      const container = {}

      // FETCH ALL PRODUCTS
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
      
            dispatch({
               type: 'init',
               payload: {
                  products: container,
                  cart: init()
               }
            })
         
         // OTHERWISE, SHOW ERROR
         } else { console.log('PRODUCT API ERROR') }
      })

   // eslint-disable-next-line
   }, [])

   return null;
}

export default Init;