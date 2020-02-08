import React, { useContext } from 'react';
import { Context } from "../context";
import '../interface/css/innerbody.scss';

function Other() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);

   return (
      <div id={ 'innerbody' }>
          Other
      </div>
   )
}

export default Other;