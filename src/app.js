import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./components/context";
import './interface/css/general.scss';

import Menu from './components/menu';
import Pages from './components/pages';
import Prompt from './components/prompt';

function App() { return (
   <BrowserRouter>
      <Provider>
         <div id={ 'wrapper' }>
            <Menu />
            <Pages />
         </div>
         <Prompt />
      </Provider>
   </BrowserRouter>
)}

export default App;
