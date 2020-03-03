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

        // EMAIL REGEX PATTERN
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //eslint-disable-line

        // RESULT OF PATTERN MATCH
        const result =  regex.test(input.toLowerCase());

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
                type={ 'text' }
                placeholder={ placeholder }
                value={ value }
                onChange={ event => { validate(event.target.value) }}
            />
        </div>
    )
}

export default Email;