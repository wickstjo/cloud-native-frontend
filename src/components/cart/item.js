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
            name: state.products[id].name,
            available: state.products[id].available
        })

    // eslint-disable-next-line
    }, [state.cart, Object.keys(state.cart).length])

    // INCREASE AMOUNT
    function increase() {

        // CHECK THAT AMOUNT IS AVAILABLE
        if (local.amount < local.available) {
            dispatch({
                type: 'add-item',
                payload: {
                    data: {
                        id: id,
                        amount: local.amount + 1
                    },
                    msg: 'amount increased'
                }
            })

        // IF NOT, SHOW ERROR
        } else {
            dispatch({
                type: 'add-message',
                payload: 'maximum capacity reached'
            })
        }
    }

    // DECREASE AMOUNT
    function decrease() {
        if (local.amount > 1) {
            dispatch({
                type: 'add-item',
                payload: {
                    data: {
                        id: id,
                        amount: local.amount - 1
                    },
                    msg: 'amount decreased'
                }
            })
        }
    }

    // REMOVE ITEM 
    function remove() {
        dispatch({
            type: 'remove-item',
            payload: {
                key: id,
                msg: 'item removed'
            }
        })
    }

    return (
        <div className={ 'item' }>
            <div>
                <div id={ 'amount' }>{ local.amount }x</div>
                <div id={ 'name' }>{ local.name }</div>
            </div>
            <div>
                <div id={ 'actions' }>
                    <div className={ 'action' } onClick={ increase }>Increase</div>
                    <div className={ 'action' } onClick={ decrease }>Decrease</div>
                    <div className={ 'action' } onClick={ remove }>Remove</div>
                </div>
                <div id={ 'price' }>{ (local.amount * local.price).toFixed(2) }€</div>
            </div>
        </div>
    )
}

export default Item;