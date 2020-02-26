import React from 'react';
import '../interface/css/innerbody.scss';
import '../interface/css/shop.scss';

import data from '../data/products.json';
import Product from "../components/shop/product";

function Shop() { return (
    <div className={ 'inner' } id={ 'shop' }>
        { data.map((product, index) =>
            <Product
                product={ product }
                key={ index }
            />
        )}
    </div>
)}

export default Shop;