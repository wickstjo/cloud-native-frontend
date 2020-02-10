// WAIT FOR GIVEN MILLISECONDS
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}

function key_listener(state, dispatch, event, func) {
   if (state.prompt.visible) {
      switch (event.key.toLowerCase()) {

         case 'enter':
            func();
         break;

         case 'escape':
            dispatch({ type: 'hide-prompt' })
         break;

         default:
            console.log('KEY LISTENER ERROR')
      }
   }
}

export {
   sleep,
   key_listener
}