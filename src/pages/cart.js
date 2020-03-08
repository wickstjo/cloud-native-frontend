import React from 'react';
import '../interface/css/innerbody.scss';
import '../interface/css/cart.scss';

import Items from "../components/cart/items";
import Order from "../components/cart/order";

function Cart() { return (
   <div className={ 'inner' } id={ 'cart' }>
      <div>
         <Items />
      </div>
      <Order />
   </div>
)}

export default Cart;