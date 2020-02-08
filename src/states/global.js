// DEFUALT VALUES
const values = {
   data: null,
   current: 0
}

// REDUCER
function reducer(state, action) {
   switch (action.type) {

      // ON THE INITIAL PAGE LOAD
      case 'init': { return {
         ...state,
         profiles: action.payload.profiles,
         settings: action.payload.settings,
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