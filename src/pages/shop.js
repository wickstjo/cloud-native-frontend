import React, { useContext } from 'react';
import { Context } from "../context";
import '../interface/css/innerbody.scss';

function Shop() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);

   return (
      <div className={ 'inner' }>
         Shop
      </div>
   )
}

export default Shop;