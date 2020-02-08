// DEFUALT VALUES
const values = {
   data: null,
   current: 0
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      // ON THE INITIAL PAGE LOAD
      case 'init': { return {
         ...state,
         profiles: payload.profiles,
         settings: payload.settings,
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