import React, { useContext, useEffect } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';
import Product from "../components/shop/product"

var data = require('../MOCK_DATA(2).json')


function Shop() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);
   
   return (
      <div className={ 'inner' } id={'shop'}>
        {data.map(e => {
          return(<Product product={e} key={e["id"]}/>)
        })}
      </div>
   )
}

export default Shop;