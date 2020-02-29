import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Shop from '../pages/shop';
import Cart from '../pages/cart';
import Error from '../pages/error';

function Pages() { return (
   <div id={ 'innerbody' }>
      <Switch>
         <Route exact path={ '/' } component={ Shop } />
         <Route path={ '/cart' } component={ Cart } />
         <Route component={ Error } />
      </Switch>
   </div>
)}

export default Pages;