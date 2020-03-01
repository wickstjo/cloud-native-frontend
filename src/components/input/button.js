import React from 'react';

function Button({ value, func }) { return (
    <div>
        <input
            type={ 'submit' }
            onClick={ func }
            value={ value }
            id={ 'bad' }
        />
    </div>
)}

export default Button;