import { update, remove } from '../funcs/localstorage';

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
   cart: {},

   // ACTION MESSAGES
   messages: [],
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      case 'init': { return {
         ...state,
         products: payload.products,
         cart: payload.cart
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
         cart: update({
            data: payload.data,
            cart: state.cart
         }),
         messages: [
            ...state.messages,
            payload.msg
         ]
      }}

      // REMOVE ITEM FROM CART
      case 'remove-item': { return {
         ...state,
         cart: remove({
            key: payload.key,
            cart: state.cart
         }),
         messages: [
            ...state.messages,
            payload.msg
         ]
      }}

      // ADD MESSAGE
      case 'add-message': { return {
         ...state,
         messages: [
            ...state.messages,
            payload
         ]
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