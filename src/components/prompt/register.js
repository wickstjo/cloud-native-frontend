import React, { Fragment, useContext, useReducer } from 'react';
import { Context } from "../context";
import reducer from '../../states/input';
import { key_listener } from '../../funcs/misc';

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