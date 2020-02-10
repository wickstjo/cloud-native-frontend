import React, { useState } from 'react';

function Field({ placeholder }) {

    // LOCAL STATE
   const [local, set_local] = useState({
        input: ''
    })

    // UPDATE TEXT FIELD
    function update(event) {
        set_local({
            ...local,
            input: event.target.value
        })
    }
    
    return (
        <div>
            <input
                type={ 'text' }
                placeholder={ placeholder }
                onChange={ update }
                value={ local.input }
                className={ 'field' }
            />
        </div>
    )
}

export default Field;