import { remove } from '../funcs/misc';

// DEFUALT VALUES
const values = {

   // PRODUCT DATA
   products: {
      array: [],
      object: {}
   },

   // LOGIN STUFF
   logged: false,
   user: null,

   // PROMPT STUFF
   prompt: {
      visible: false,
      type: null
   },

   // SHOPPING CART
   cart: {}
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      case 'init': { return {
         ...state,
         products: payload
      }}

      // SHOW SPECIFIC PROMPT
      case 'show-prompt': { return {
         ...state,
         prompt: {
            visible: true,
            type: payload
         }
      }}

      // HIDE PROMPT
      case 'hide-prompt': { return {
         ...state,
         prompt: {
            ...state.prompt,
            visible: false
         }
      }}

      // LOGIN
      case 'login': { return {
         ...state,
         logged: true,
         user: payload,
         prompt: {
            ...state.prompt,
            visible: false
         }
      }}

      // LOGOUT
      case 'logout': { return {
         ...state,
         logged: false,
         user: null,
         prompt: {
            ...state.prompt,
            visible: false
         }
      }}

      // ADD ITEM TO CART
      case 'add-item': { return {
         ...state,
         cart: {
            ...state.cart,
            [payload.id]: payload.amount
         }
      }}

      // REMOVE ITEM FROM CART
      case 'remove-item': { return {
         ...state,
         cart: remove({
            key: payload,
            object: state.cart
         })
      }}

      // FALLBACK
      default: {
         console.log('CONTEXT REDUCER TYPE NOT FOUND');
         return state;
      }
   }
}

export {
   values,
   reducer
}