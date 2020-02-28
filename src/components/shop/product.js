import React, { useContext } from 'react';
import { Context } from "../../components/context";

function Product({ details, id }) {

    // GLOBAL CONTEXT
    const { state, dispatch } = useContext(Context);
    
    // ADD ITEM TO CART
    function add() {
        dispatch({
            type: 'add-item',
            payload: {
                id: id,
                amount: 1
            }
        })
    }

    // REMOVE ITEM FROM CART
    function remove() {
        dispatch({
            type: 'remove-item',
            payload: id
        })
    }

    return (
        <div className={ 'product' }>
            <div>
                <div id={ 'header' }>
                    <div id={ 'price' }>{ details.price }</div>
                    <div id={ 'name' }>{ details.name }</div>
                </div>
                <div id={ 'description' }>{ details.description }</div>
            </div>
            <div>
                <Button
                    exists={ state.cart[id] }
                    add={ add }
                    remove={ remove }
                />
            </div>
        </div>
    )
}

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

export default Product;