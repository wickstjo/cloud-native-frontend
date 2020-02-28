import React, { useContext } from 'react';
import { Context } from "../components/context";
import '../interface/css/innerbody.scss';
import '../interface/css/shop.scss';

import Product from "../components/shop/product";

function Shop() {

    // GLOBAL STATE
    const { state } = useContext(Context);
    
    return (
        <div className={ 'inner' } id={ 'shop' }>
            { Object.keys(state.products).map((id, index) =>
                <Product
                    details={ state.products[id] }
                    id={ id }
                    key={ index }
                />
            )}
        </div>
    )
}

export default Shop;