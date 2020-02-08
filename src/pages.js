import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Other from './pages/other';
import Error from './pages/error';

function Pages() { return (
   <Switch>
      <Route exact path={ '/' } component={ Home } />
      <Route path={ '/other' } component={ Other } />
      <Route component={ Error } />
   </Switch>
)}

export default Pages;