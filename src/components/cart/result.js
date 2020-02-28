import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../components/context";

function Result() {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // LOCAL STATE
    const [total, set_total] = useState(0)

    // ON LOAD, CALCULATE TOTAL PRICE
    useEffect(() => {

        // PLACEHOLDER
        let price = 0;

        // LOOP THROUGH EACH ITEM
        Object.keys(state.cart).map(item =>
            price += state.cart[item] * state.products[item].price
        )

        // SET IN LOCAL STATE
        set_total(price.toFixed(2))
    }, [state])

    return (
        <div id={ 'result' }>
            <div id={ 'header' }>Total:</div>
            <div id={ 'total' }>{ total }</div>
        </div>
    )
}

export default Result;