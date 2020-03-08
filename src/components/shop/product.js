import React, { useContext, Fragment } from 'react';
import { Context } from "../../components/context";

import { remove as mock_remove } from '../../funcs/mock/products';

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

        // SHOW LOADING SCREEN
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })

        // ATTEMPT TO LOGIN
        mock_remove().then(result => {

            // IF EVERYTHING WENT WELL
            if (result.status === 200) {

                // IF RESPONSE IS TRUE
                if (result.data) {

                    // HIDE LOADING SCREEN
                    dispatch({
                        type: 'hide-prompt'
                    })

                    // SHOW MESSAGE
                    dispatch({
                        type: 'add-message',
                        payload: 'item removed from database'
                    })

                // OTHERWISE, SHOW ERROR
                } else {
                    dispatch({
                        type: 'add-message',
                        payload: 'could not remove item, please try again'
                    })
                }

            // OTHERWISE, SHOW ERROR
            } else {
                dispatch({
                    type: 'add-message',
                    payload: 'api error when removing item'
                })
            }
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