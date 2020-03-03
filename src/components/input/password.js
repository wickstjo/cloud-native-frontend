import React, { useState, useEffect } from 'react';

function Email({ value, placeholder, update, id }) {

    // STYLE STATE
    const [style, set_style] = useState('bad-input');

    // VALIDATE ON INITIAL LOAD
    useEffect(() => {
        validate(value)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // VALIDATE USER INPUT
    function validate(input) {

        // MEDIUM STRENGTH REGEX PATTERN
        const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        
        // RESULT OF PATTERN MATCH
        const result =  regex.test(input);

        // CHANGE STYLE
        switch(result) {

            // IF THE VALIDATION PASSES
            case true:
                set_style('good-input')
            break;

            // OTHERWISE
            default: {
                set_style('bad-input')
            }
        }

        // UPDATE PARENT STATE
        update({
            type: 'field',
            payload: {
                name: id,
                value: {
                    value: input,
                    status: result
                }
            }
        })
    }

    return (
        <div className={ style }>
            <input
                type={ 'password' }
                placeholder={ placeholder }
                value={ value }
                onChange={ event => { validate(event.target.value) }}
            />
        </div>
    )
}

export default Email;