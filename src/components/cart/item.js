import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../context";

function Item({ id }) {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useState({
        price: 0,
        amount: 0,
        name: ''
    })
    
    // SET VALUES IN LOCAL STATE
    useEffect(() => {
        set_local({
            price: state.products[id].price,
            amount: state.cart[id],
            name: state.products[id].name
        })

    // eslint-disable-next-line
    }, [state.cart, Object.keys(state.cart).length])

    // INCREASE AMOUNT
    function increase() {
        dispatch({
            type: 'add-item',
            payload: {
                id: id,
                amount: local.amount + 1
            }
        })
    }

    // DECREASE AMOUNT
    function decrease() {
        if (local.amount > 1) {
            dispatch({
                type: 'add-item',
                payload: {
                    id: id,
                    amount: local.amount - 1
                }
            })
        }
    }

    // REMOVE ITEM 
    function remove() {
        dispatch({
            type: 'remove-item',
            payload: id
        })
    }

    return (
        <div className={ 'item' }>
            <div>
                <div id={ 'amount' }>{ local.amount }x</div>
                <div id={ 'name' }>{ local.name }</div>
            </div>
            <div>
                <div id={ 'increase' } onClick={ increase }>Increase</div>
                <div id={ 'decrease' } onClick={ decrease }>Decrease</div>
                <div id={ 'remove' } onClick={ remove }>Remove</div>
                <div id={ 'price' }>{ (local.amount * local.price).toFixed(2) }</div>
            </div>
        </div>
    )
}

export default Item;