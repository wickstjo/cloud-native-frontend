// WAIT FOR GIVEN MILLISECONDS
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}

function key_listener(state, dispatch, event) {
   if (state.prompt.visible) {
      switch (event.key.toLowerCase()) {

         case 'escape':
            dispatch({ type: 'hide-prompt' })
         break;

         default:
            console.log('KEY LISTENER ERROR')
      }
   }
}

// VALIDATE INPUT VALUES
function check_validation(values) {

   // IF VALUES WERE DEFINED
   if (values !== undefined) {

      // DEFAULT TO TRUE
      let response = true;

      // LOOP THROUGH VALUES
      for (let value of values) {
         if (value !== true) {

            // IF IT ISNT TRUE, SWITCH TO FALSE & STOP LOOPING
            response = false;
            break;
         }
      }

      // FINALLY RETURN RESULT
      return response;

   // OTHERWISE, AUTOMATICALLY RETURN TRUE
   } else { return true; }
}

export {
   sleep,
   key_listener,
   check_validation
}