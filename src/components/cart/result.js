import React, { useEffect, useState } from 'react';

function Result({ cart, products }) {

    // LOCAL STATE
    const [total, set_total] = useState(0)

    // ON LOAD, CALCULATE TOTAL PRICE
    useEffect(() => {

        // PLACEHOLDER
        let price = 0;

        // LOOP THROUGH EACH ITEM
        Object.keys(cart).map(item =>

            // IF THE PRODUCT EXISTS, ADD TO SUM
            products[item] !== undefined ? price += cart[item] * products[item].price : null
        )

        // SET IN LOCAL STATE
        set_total(price.toFixed(2))

    // eslint-disable-next-line
    }, [cart, Object.keys(cart).length])

    return (
        <div id={ 'result' }>
            <div id={ 'header' }>Total:</div>
            <div id={ 'total' }>{ total }€</div>
        </div>
    )
}

export default Result;