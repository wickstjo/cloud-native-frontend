import React from 'react';

function Trigger({ header, func }) { return (
    <li onClick={ func }>{ header }</li>
)}

export default Trigger;