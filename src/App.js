import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./context";
import './interface/css/general.scss';

import Menu from './menu';
import Pages from './pages';

function App() { return (
   <BrowserRouter>
      <Provider>
         <div id={ 'wrapper' }>
            <Menu />
            <Pages />
         </div>
      </Provider>
   </BrowserRouter>
)}

export default App;