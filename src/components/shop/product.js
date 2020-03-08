import React, { useContext, Fragment } from 'react';
import { Context } from "../../components/context";

import Button from './button'
import Action from './action'

function Product({ details, id }) {

    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);
    
    // ADD ITEM TO CART
    function add() {
        dispatch({
            type: 'add-item',
            payload: {
                data: {
                    id: id,
                    amount: 1
                },
                msg: 'item added to cart'
            }
            
        })
    }

    // REMOVE ITEM FROM CART
    function cart_remove() {
        dispatch({
            type: 'remove-item',
            payload: {
                key: id,
                msg: 'item removed from cart'
            }
        })
    }

    // SHOW QUANTITY PROMPT
    function quantity() {
        dispatch({
            type: 'show-prompt',
            payload: 'quantity'
        })
    }

    // REMOVE PRODUCT FROM DB
    function db_remove() {
        dispatch({
            type: 'add-message',
            payload: 'item removed from database'
        })
    }

    return (
        <div className={ 'product' }>
            <div>
                <div id={ 'header' }>
                    <div id={ 'price' }>{ details.price }€</div>
                    <div id={ 'name' }>{ details.name } | { details.available }</div>
                </div>
                <div id={ 'description' }>{ details.description }</div>
            </div>
            <div>
                <Button
                    exists={ state.cart[id] }
                    add={ add }
                    remove={ cart_remove }
                />
                { state.logged ? (
                    <Fragment>
                        <Action
                            header={ 'QUA' }
                            func={ quantity }
                        />
                        <Action
                            header={ 'REM' }
                            func={ db_remove }
                        />
                    </Fragment>
                ): null }
            </div>
        </div>
    )
}

export default Product;