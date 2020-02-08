// DEFUALT VALUES
const values = {
   data: null,
   current: 0,

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