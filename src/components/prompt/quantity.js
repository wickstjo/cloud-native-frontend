import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

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

        // HIDE PROMPT
        dispatch({
            type: 'hide-prompt',
        })

        // SHOW MESSAGE
        dispatch({
            type: 'add-message',
            payload: 'quantity increased'
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