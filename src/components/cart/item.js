import React, { useContext } from 'react';
import { Context } from "../context";

function Item({ id, amount }) {

    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);
    
    // INCREASE 
    function increase() {
        dispatch({
            type: 'increase',
            payload: id
        })
    }

    // DECREASE ITEM AMOUNT
    function decrease() {
        dispatch({
            type: 'decrease',
            payload: id
        })
    }

    return (
        <div className={ 'item' }>
            <div>
                { state.products[id].name }
            </div>
            <div>
                { state.cart[id] }
            </div>
        </div>
    )
}

export default Item;