import React, { useContext } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';

import Item from "../components/cart/item";

function Cart() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);

   return (
      <div className={ 'inner' }>
         { Object.keys(state.cart).map((id, index) =>
            <Item
               id={ id }
               key={ index }
            />
         )}
      </div>
   )
}

export default Cart;