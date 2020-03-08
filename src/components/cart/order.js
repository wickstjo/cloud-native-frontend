import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../context";

function Order() {

    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useState({
        header: '',
        type: ''
    })

    useEffect(() => {
        if (state.logged) {
            set_local({
                header: 'Place an Order',
                type: 'active'
            })
        } else {
            set_local({
                header: 'Login to Order',
                type: 'inactive'
            })
        }
    }, [state.logged])

    function execute() {
        if (state.logged) {

            // ADD MESSAGE
            dispatch({
                type: 'reset-cart',
                payload: 'order placed'
            })
        }
    }
    
    return (
        <div id={ 'order' }>
            <Button
                header={ local.header }
                type={ local.type }
                func={ execute }
            />
        </div>
    )
}

function Button({ header, type, func }) { return (
    <span id={ type } onClick={ func }>{ header }</span>
)}

export default Order;