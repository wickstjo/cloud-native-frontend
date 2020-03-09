import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

import { register } from '../../funcs/api/customers';
//import { register as mock_register } from '../../funcs/mock/customers';

import EventListener from 'react-event-listener';
import Email from '../input/email';
import Text from '../input/text';
import Password from '../input/password';
import Button from '../input/button';

function Register() {

    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);

    // LOCAL INPUT STATE
    const [local, set_local] = useReducer(reducer, {
        email: {
            value: '',
            status: null
        },
        fname: {
            value: '',
            status: null
        },
        lname: {
            value: '',
            status: null
        },
        address: {
            value: '',
            status: null
        },
        password: {
            value: '',
            status: null
        },
        password_again: {
            value: '',
            status: null
        }
    })

    // REGISTER FUNC
    function execute() {

        // SHOW LOADING SCREEN
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })

        // ATTEMPT TO REGISTER
        register({
            email: local.email.value,
            password: local.password.value,
            fname: local.fname.value,
            lname: local.lname.value,
            address: local.address.value

        // IF EVERYTHING WENT FINE
        }).then(result => {
            if (result.status === 201) {

                // REGISTER, LOGIN & HIDE PROMPT
                dispatch({
                    type: 'login',
                    payload: {
                        user: local.email.value,
                        msg: 'successfully registered & logged in'
                    }
                })
            }

        // OTHERWISE, PROCESS ERROR
        }).catch(() => {

            // HIDE LOADING SCREEN
            dispatch({
                type: 'hide-prompt'
            })

            // SHOW ERROR
            dispatch({
                type: 'add-message',
                payload: 'email already in use'
            })
        })
    }

    // MOCK CALL
    /* function mock() {

        // ATTEMPT TO REGISTER
        mock_register().then(result => {

            // IF EVERYTHING WENT WELL
            if (result.status === 200) {

                // IF RESPONSE IS TRUE
                if (result.data) {

                    // LOG IN & HIDE PROMPT
                    dispatch({
                        type: 'login',
                        payload: local.email.value
                    })

                // OTHERWISE, SHOW ERROR
                } else {
                    dispatch({
                        type: 'add-message',
                        payload: 'combination does not exist'
                    })
                }

            // OTHERWISE, SHOW ERROR
            } else {
                dispatch({
                    type: 'add-message',
                    payload: 'api error when logging in'
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
            <div id={ 'header' }>Register</div>
            <div id={ 'content' }>
                <Email
                    placeholder={ 'Email' }
                    value={ local.email.value }
                    update={ set_local }
                    id={ 'email' }
                />
                <Text
                    placeholder={ 'First Name' }
                    value={ local.fname.value }
                    range={[ 2, 20 ]}
                    update={ set_local }
                    id={ 'fname' }
                />
                <Text
                    placeholder={ 'Last Name' }
                    value={ local.lname.value }
                    range={[ 2, 30 ]}
                    update={ set_local }
                    id={ 'lname' }
                />
                <Text
                    placeholder={ 'Address' }
                    value={ local.address.value }
                    range={[ 10, 30 ]}
                    update={ set_local }
                    id={ 'address' }
                />
                <Password
                    placeholder={ 'Password' }
                    value={ local.password.value }
                    update={ set_local }
                    id={ 'password' }
                />
                <Password
                    placeholder={ 'Password Again' }
                    value={ local.password_again.value }
                    update={ set_local }
                    id={ 'password_again' }
                />
                <Button
                    header={ 'Register' }
                    func={ execute }
                    require={[
                        local.email.status,
                        local.fname.status,
                        local.lname.status,
                        local.address.status,
                        local.password.status,
                        local.password_again.status,
                        local.password.value === local.password_again.value
                    ]}
                />
            </div>
        </Fragment>
    )
}

export default Register;