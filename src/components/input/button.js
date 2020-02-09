import React from 'react';

function Button({ value, func }) { return (
    <div>
        <input
            type={ 'submit' }
            onClick={ func }
            value={ value }
            className={ 'button' }
        />
    </div>
)}

export default Button;