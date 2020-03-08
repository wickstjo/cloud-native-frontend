import React from 'react';

function Action({ header, func }) { return (
    <div id={ 'action' } onClick={ func }>{ header }</div>
)}

export default Action;