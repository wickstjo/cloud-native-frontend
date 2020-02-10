import React, { useContext, Fragment } from 'react';
import { Context } from "./context";
import '../interface/css/menu.scss';

import MenuItem from './menu/item'
import MenuTrigger from './menu/trigger'

function Menu() {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // REGISTER PROMPT
    function register() {
        dispatch({
            type: 'show-prompt',
            payload: 'register'
        })
    }

    // LOGIN PROMPT
    function login() {
        dispatch({
            type: 'show-prompt',
            payload: 'login'
        })
    }

    // LOGOUT
    function logout() {
        dispatch({ type: 'logout' })
    }
    
    return (
        <div id="menu">
            <div className={ 'split' }>
                <div>
                    <MenuItem
                        header={ 'Shop' }
                        link={ '/' }
                    />
                    <MenuItem
                        header={ 'Cart' }
                        link={ '/cart' }
                    />
                </div>
                <div>
                    { state.logged ? (
                        <Fragment>
                            <MenuItem header={ 'Manage' } link={ '/manage' } />
                            <MenuTrigger header={ 'Logout (' + state.user + ')' } func={ logout } />
                        </Fragment>
                    ):(
                        <Fragment>
                            <MenuTrigger header={ 'Register' } func={ register } />
                            <MenuTrigger header={ 'Login' } func={ login } />
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Menu;