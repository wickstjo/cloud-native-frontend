import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

import { modify as mock_modify } from '../../funcs/mock/inventory';

import EventListener from 'react-event-listener';
import Number from '../input/number';
import Button from '../input/button';

function Quantity() {
    
    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);
    
    // LOCAL INPUT STATE
    const [local, set_local] = useReducer(reducer, {
        amount: {
            value: '',
            status: null
        }
    })

    // INCREASE QUANTITY
    function execute() {

        // SHOW LOADING SCREEN
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })

        // ATTEMPT TO LOGIN
        mock_modify().then(result => {

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
                        payload: 'quantity increased'
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
        <Fragment>
            <EventListener
                target={ 'window' }
                onKeyDown={ event => {
                    key_listener(state, dispatch, event)
                }}
            />
            <div id={ 'header' }>Increase Quantity</div>
            <div id={ 'content' }>
                <Number
                    placeholder={ 'Increase by amount' }
                    value={ local.amount.value }
                    range={[ 1, 100 ]}
                    update={ set_local }
                    id={ 'amount' }
                />
                <Button
                    header={ 'Execute' }
                    func={ execute }
                    require={[
                        local.amount.status
                    ]}
                />
            </div>
        </Fragment>
    )
}

export default Quantity;