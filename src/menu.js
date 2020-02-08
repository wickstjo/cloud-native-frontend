import React from 'react';
import './interface/css/menu.scss';

import MenuItem from './components/menu_item'

function Menu() { return (
    <div id="menu">
        <MenuItem header={ 'Shop' } link={ '/' } />
        <MenuItem header={ 'Cart' } link={ '/cart' } />
        <MenuItem header={ 'Manage' } link={ '/manage' } />
    </div>
)}

export default Menu;