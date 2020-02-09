// DEFUALT VALUES
const values = {
   logged: false,
   user: null,

   // PROMPT STUFF
   prompt: {
      visible: false,
      type: null
   }
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

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