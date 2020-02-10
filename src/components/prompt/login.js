import React, { Fragment, useContext } from 'react';
import { Context } from "../context";
import { key_listener } from '../../funcs/misc';

import EventListener from 'react-event-listener';
import Field from '../input/field';
import Button from '../input/button';

function Login() {
    
    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);

    // LOGIN FUNC
    function login() {
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
                    key_listener(state, dispatch, event, login)
                }}
            />
            <div id={ 'header' }>Login</div>
            <div id={ 'content' }>
                <Field placeholder={ 'email' } />
                <Field placeholder={ 'password' } />
                <Button value={ 'submit' } func={ login } />
            </div>
        </Fragment>
    )
}

export default Login;