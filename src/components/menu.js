import React, { useContext } from 'react';
import { Context } from "./context";
import '../interface/css/menu.scss';

import MenuItem from './menu/item'
import MenuTrigger from './menu/trigger'

function Menu() {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

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
    
    return (
        <div id="menu">
            <div className={ 'split' }>
                <div>
                    <MenuItem header={ 'Shop' } link={ '/' } />
                    <MenuItem header={ 'Cart' } link={ '/cart' } />
                    <MenuItem header={ 'Manage' } link={ '/manage' } />
                </div>
                <div>
                    <MenuTrigger header={ 'Register' } func={ register } />
                    <MenuTrigger header={ 'Login' } func={ login } />
                </div>
            </div>
        </div>
    )

}

export default Menu;