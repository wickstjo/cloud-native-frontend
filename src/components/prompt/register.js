import React, { Fragment, useContext } from 'react';
import { Context } from "../context";
import { key_listener } from '../../funcs/misc';

import EventListener from 'react-event-listener';
import Field from '../input/field';
import Button from '../input/button';

function Register() {

    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);

    // REGISTER FUNC
    function register() {
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
                    key_listener(state, dispatch, event, register)
                }}
            />
            <div id={ 'header' }>Register</div>
            <div id={ 'content' }>
                <Field placeholder={ 'email' } />
                <Field placeholder={ 'location' } />
                <Field placeholder={ 'password' } />
                <Field placeholder={ 'password again' } />
                <Button value={ 'submit' } func={ register } />
            </div>
        </Fragment>
    )
}

export default Register;