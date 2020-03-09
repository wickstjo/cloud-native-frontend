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

    // LOGIN PROMPT
    function add() {
        dispatch({
            type: 'show-prompt',
            payload: 'add'
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
                    { state.session.active ? (
                        <Fragment>
                            <MenuTrigger
                                header={ 'Add Product' }
                                func={ add }
                            />
                            <MenuTrigger
                                header={ 'Logout (' + state.session.user + ')' }
                                func={ logout }
                            />
                        </Fragment>
                    ):(
                        <Fragment>
                            <MenuTrigger
                                header={ 'Register' }
                                func={ register }
                            />
                            <MenuTrigger
                                header={ 'Login' }
                                func={ login }
                            />
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Menu;