import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

import { add } from '../../funcs/api/products';
//import { add as mock_add } from '../../funcs/mock/products';

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

    // ADD PRODUCT
    function execute() {

        // SHOW LOADING SCREEN
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })

        // ATTEMPT TO ADD PRODUCT
        add({
            name: local.name.value,
            description: local.description.value,
            price: local.price.value

        // IF EVERYTHING WENT WELL
        }).then(result => {
            
            // IF EVERYTHING WENT WELL
            if (result.status === 201) {

                // ADD PRODUCT, HIDE PROMPT & SHOW MESSAGE
                dispatch({
                    type: 'add-product',
                    payload: {
                        id: result.data.id,
                        data: {
                            name: local.name.value,
                            description: local.description.value,
                            price: local.price.value,
                            quantity: 0
                        },
                        msg: 'item added to database'
                    }
                })

            // OTHERWISE, SHOW ERROR
            } else {
                dispatch({
                    type: 'add-message',
                    payload: 'could not add item, please try again (' + result.status + ')'
                })
            }

        // OTHERWISE, SHOW SERVER ERROR
        }).catch(() => {
            dispatch({
                type: 'add-message',
                payload: 'api error when adding item'
            })
        })
    }

    // MOCK CALL
    /* function mock() {
        
        // SHOW LOADING SCREEN
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })

        // ATTEMPT TO LOGIN
        mock_add().then(result => {

            // IF EVERYTHING WENT WELL
            if (result.status === 200) {

                // IF RESPONSE IS TRUE
                if (result.data.success) {

                    // ADD PRODUCT, HIDE PROMPT & SHOW MESSAGE
                    dispatch({
                        type: 'add-product',
                        payload: {
                            id: result.data.id,
                            data: {
                                name: local.name.value,
                                description: local.description.value,
                                price: local.price.value,
                                quantity: 0
                            },
                            msg: 'item added to database'
                        }
                    })

                // OTHERWISE, SHOW ERROR
                } else {
                    dispatch({
                        type: 'add-message',
                        payload: 'could not add item, please try again'
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
    } */
    
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