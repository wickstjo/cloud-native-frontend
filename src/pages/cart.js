import React, { useContext, Fragment } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';
import '../interface/css/cart.scss';

import Item from "../components/cart/item";
import Result from "../components/cart/result";

function Cart() {
   
   // GLOBAL CONTEXT
   const { state } = useContext(Context);

   return (
      <div className={ 'inner' } id={ 'cart' }>
         <Items data={ Object.keys(state.cart) } />
      </div>
   )
}

function Items({ data }) {
   switch(data.length) {
      
      case 0: { return (
         <div>The cart contains nothing.</div>
      )}

      default: { return (
         <Fragment>
            { data.map((id, index) =>
               <Item
                  id={ id }
                  key={ index }
               />
            )}
            <Result />
         </Fragment>
      )}
   }
}

export default Cart;