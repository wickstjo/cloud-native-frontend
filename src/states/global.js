import { update, remove as remove_item, reset } from '../funcs/localstorage';
import { remove as remove_product } from '../funcs/misc';

// DEFUALT VALUES
const values = {

   // PRODUCT DATA
   products: {},
   recent: '',

   // LOGIN STUFF
   logged: false,
   user: null,

   // PROMPT STUFF
   prompt: {
      visible: true,
      type: 'loading'
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
         cart: payload.cart,
         prompt: {
            visible: false,
            type: null
         }
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
         cart: remove_item({
            key: payload.key,
            cart: state.cart
         }),
         messages: [
            ...state.messages,
            payload.msg
         ]
      }}

      case 'reset-cart': { return {
         ...state,
         cart: reset(),
         messages: [
            ...state.messages,
            payload
         ],
         prompt: {
            visible: false,
            type: null
         }
      }}

      // ADD MESSAGE
      case 'add-message': { return {
         ...state,
         messages: [
            ...state.messages,
            payload
         ]
      }}

      // REMOVE PRODUCT
      case 'remove-product': { return {
         ...state,
         products: remove_product({
            key: payload.key,
            obj: state.products
         }),
         prompt: {
            visible: false,
            type: null
         },
         messages: [
            ...state.messages,
            payload.msg
         ]
      }}

      // ADD PRODUCT
      case 'add-product': { return {
         ...state,
         products: {
            ...state.products,
            [payload.id]: payload.data
         },
         prompt: {
            visible: false,
            type: null
         },
         messages: [
            ...state.messages,
            payload.msg
         ]
      }}

      // MODIFY PRODUCT QUANTITY
      case 'modify-quantity': { return {
         ...state,
         products: {
            ...state.products,
            [payload.id]: {
               ...state.products[payload.id],
               quantity: payload.amount
            }
         },
         prompt: {
            visible: false,
            type: null
         },
         messages: [
            ...state.messages,
            payload.msg
         ]
      }}

      // RECENTLY INTERACTED WITH PRODUCT
      case 'recent': { return {
         ...state,
         recent: payload
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