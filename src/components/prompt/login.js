import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

import { login as mock_login } from '../../funcs/mock/customers';

import EventListener from 'react-event-listener';
import Email from '../input/email';
import Password from '../input/password';
import Button from '../input/button';

function Login() {
    
    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);
    
    // LOCAL INPUT STATE
    const [local, set_local] = useReducer(reducer, {
        email: {
            value: '',
            status: null
        },
        password: {
            value: '',
            status: null
        }
    })

    // LOGIN FUNC
    function execute() {

        // SHOW LOADING SCREEN
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })

        // ATTEMPT TO LOGIN
        mock_login().then(result => {

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
                        payload: 'email is already exists'
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
    }
    
    return (
        <Fragment>
            <EventListener
                target={ 'window' }
                onKeyDown={ event => {
                    key_listener(state, dispatch, event)
                }}
            />
            <div id={ 'header' }>Login</div>
            <div id={ 'content' }>
                <Email
                    placeholder={ 'Email' }
                    value={ local.email.value }
                    update={ set_local }
                    id={ 'email' }
                />
                <Password
                    placeholder={ 'Password' }
                    value={ local.password.value }
                    update={ set_local }
                    id={ 'password' }
                />
                <Button
                    header={ 'Login' }
                    func={ execute }
                    require={[
                        local.email.status,
                        local.password.status
                    ]}
                />
            </div>
        </Fragment>
    )
}

export default Login;