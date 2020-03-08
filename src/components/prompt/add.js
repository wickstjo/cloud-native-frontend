import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

import EventListener from 'react-event-listener';
import Text from '../input/text';
import Number from '../input/number';
import Button from '../input/button';

function Add() {

    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);

    // LOCAL INPUT STATE
    const [local, set_local] = useReducer(reducer, {
        name: {
            value: '',
            status: null
        },
        description: {
            value: '',
            status: null
        },
        price: {
            value: '',
            status: null
        }
    })

    // REGISTER FUNC
    function execute() {
        dispatch({
            type: 'login',
            payload: 'foobar'
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
            <div id={ 'header' }>Add Product</div>
            <div id={ 'content' }>
                <Text
                    placeholder={ 'Name' }
                    value={ local.name.value }
                    range={[ 2, 20 ]}
                    update={ set_local }
                    id={ 'name' }
                />
                <Text
                    placeholder={ 'Description' }
                    value={ local.description.value }
                    range={[ 2, 50 ]}
                    update={ set_local }
                    id={ 'description' }
                />
                <Number
                    placeholder={ 'Price' }
                    value={ local.price.value }
                    range={[ 1, 500 ]}
                    update={ set_local }
                    id={ 'price' }
                />
                <Button
                    header={ 'Execute' }
                    func={ execute }
                    require={[
                        local.name.status,
                        local.description.status,
                        local.price.status
                    ]}
                />
            </div>
        </Fragment>
    )
}

export default Add;