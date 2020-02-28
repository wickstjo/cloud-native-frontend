import { useContext, useEffect } from 'react';
import { Context } from "./context";
import '../interface/css/prompt.scss';

import products from '../data/products.json';

// PROMPT CONTAINER
function Init() {
   
   // GLOBAL STATE
   const { dispatch } = useContext(Context);

   // LOAD ONCE
   useEffect(() => {

      // CONTAINER
      const container = {}

      // LOOP THROUGH & PUSH TO CONTAINER
      products.forEach(element => {
         container[element.id] = {
            category: element.category,
            name: element.name,
            description: element.description,
            price: element.price
         }
      })

      dispatch({
         'type': 'init',
         'payload': container
      })
   }, [dispatch])

   return null;
}

export default Init;