import React, { useContext, Fragment } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';
import '../interface/css/cart.scss';

import Item from "../components/cart/item";
import Result from "../components/cart/result";
import Order from "../components/cart/order";

function Cart() {
   
   // GLOBAL STATE
   const { state } = useContext(Context);

   return (
      <div className={ 'inner' } id={ 'cart' }>
         <div>
            <Items
               keys={ Object.keys(state.cart) }
               cart={ state.cart }
               products={ state.products }
               logged={ state.logged }
               user={ state.user }
            />
         </div>
         <Order
            logged={ state.logged }
            user={ state.user }
         />
      </div>
   )
}

function Items({ keys, cart, products }) {
   switch(keys.length) {
      
      // NO ITEMS EXIST
      case 0: { return (
         <div id={ 'empty' }>The cart contains nothing.</div>
      )}

      // SOME ITEMS EXIST
      default: { return (
         <Fragment>
            { keys.map((id, index) =>
               <Item
                  id={ id }
                  key={ index }
               />
            )}
            <Result
               cart={ cart }
               products={ products }
            />
         </Fragment>
      )}
   }
}

export default Cart;