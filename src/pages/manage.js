import React, { useContext } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';

function Manage() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);

   return (
      <div className={ 'inner' }>
         Manage
      </div>
   )
}

export default Manage;