import React, { useContext } from 'react';
import { Context } from "../context";
import '../interface/css/innerbody.scss';

import Button from "../components/button";

function Home() {
   
   // GLOBAL CONTEXT
   const { state, dispatch } = useContext(Context);

   return (
      <div id={ 'innerbody' }>
         <Button placeholder={ 'foobar' } />
      </div>
   )
}

export default Home;