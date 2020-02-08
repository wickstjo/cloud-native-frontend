import React, { useContext, useEffect } from 'react';
import { Context } from "./context";
import { sleep } from "../funcs/misc";
import '../interface/css/prompt.scss';

import Register from './prompt/register';
import Login from './prompt/login';

// PROMPT CONTAINER
function Prompt() {
   
   // GLOBAL STATE
   const { state, dispatch } = useContext(Context);

   // TOGGLE VISIBILITY BASED ON STATE
   useEffect(() => {
      if (state.prompt.visible) {
         document.getElementById('prompt').style.display = 'flex';
         sleep(100).then(() => {
            document.getElementById('prompt').style.opacity = 1;
         });
      } else {
         document.getElementById('prompt').style.opacity = 0;
         sleep(100).then(() => {
            document.getElementById('prompt').style.display = 'none';
         });
      }
   }, [state.prompt.visible]);

   return (
      <div id={ 'prompt' }>
         <div id={ 'inner' }>
            <Content
               type={ state.prompt.type }
            />
            <span
               id="close"
               onClick={() => { dispatch({ type: 'hide-prompt' }) }}
            />
         </div>
      </div>
   )
}

// PROMPT CONTENT
function Content({ type }) {
   switch(type) {

        // LOADING SCREEN
        case 'loading': {
            return <div className="lds-dual-ring" />
        }

        // REGISER USER
        case 'register': {
            return <Register />
        }

        // LOGIN USER
        case 'login': {
            return <Login />
        }

        // FALLBACK
        default: {
            return <div>PROMPT TYPE ERROR</div>
        }
   }
}

export default Prompt;