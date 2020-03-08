import React from 'react';

// CHANGE BUTTON IF ITEM EXISTS IN CART
function Button({ exists, add, remove }) {
    switch(exists) {
        
        // ADD BUTTON
        case undefined: { return (
            <div id={ 'add' } onClick={ add }>ADD</div>
        )}

        // REMOVE BUTTON
        default:  { return (
            <div id={ 'remove' } onClick={ remove }>DEL</div>
        )}
    }
}

export default Button;