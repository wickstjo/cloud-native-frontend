import React, { useContext } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';

function Cart() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);

   return (
      <div className={ 'inner' }>
         Cart
      </div>
   )
}

export default Cart;