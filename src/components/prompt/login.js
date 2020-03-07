import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

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
        if (local.email.status && local.password.status) {
            dispatch({
                type: 'login',
                payload: 'foobar'
            })
        }
    }
    
    return (
        <Fragment>
            <EventListener
                target={ 'window' }
                onKeyDown={ event => {
                    key_listener(state, dispatch, event, execute)
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