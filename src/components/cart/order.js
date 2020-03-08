import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../context";

import { submit as mock_submit } from '../../funcs/mock/delivery';

function Order() {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useState({
        header: '',
        type: ''
    })

    // BUTTON EFFECT
    useEffect(() => {
        if (state.logged) {
            set_local({
                header: 'Place an Order',
                type: 'active'
            })
        } else {
            set_local({
                header: 'Login to Order',
                type: 'inactive'
            })
        }
    }, [state.logged])

    // PLACE ORDER
    function execute() {
        if (state.logged) {

            // SHOW LOADING SCREEN
            dispatch({
                type: 'show-prompt',
                payload: 'loading'
            })

            // SUBMIT ORDER
            mock_submit().then(result => {

                // IF EVERYTHING WENT WELL
                if (result.status === 200) {

                    // IF RESPONSE IS TRUE
                    if (result.data) {

                        // RESET THE CART, STOP LOADING & SHOW MESSAGE
                        dispatch({
                            type: 'reset-cart',
                            payload: 'order placed'
                        })

                    // OTHERWISE, SHOW ERROR
                    } else {
                        dispatch({
                            type: 'add-message',
                            payload: 'something went wrong, please try again'
                        })
                    }

                    // RESET THE CART, STOP LOADING & SHOW MESSAGE
                    dispatch({
                        type: 'reset-cart',
                        payload: 'order placed'
                    })

                // OTHERWISE, SHOW ERROR
                } else {
                    dispatch({
                        type: 'add-message',
                        payload: 'api error when submitting'
                    })
                }
            })
        }
    }
    
    // SWITCH CONTENT
    switch(Object.keys(state.cart).length) {

        // NO ITEMS IN CART
        case 0: {
            return null
        }

        // SOME ITEMS IN CART
        default: { return (
            <div id={ 'order' }>
                <Button
                    header={ local.header }
                    type={ local.type }
                    func={ execute }
                />
            </div>
        )}
    }
}

function Button({ header, type, func }) { return (
    <span id={ type } onClick={ func }>{ header }</span>
)}

export default Order;