import React, { useContext } from 'react';
import { Context } from "../../components/context";

function Product({ product }) {

    // GLOBAL CONTEXT
    const { dispatch } = useContext(Context);
    
    // ADD ITEM TO CART
    function add() {
        dispatch({
            type: 'add-item',
            payload: {
                id: product.id,
                amount: 1
            }
        })
    }

    return (
        <div className={ 'product' }>
            <div>
                <div id={ 'header' }>
                    <div id={ 'price' }>{ product.price }</div>
                    <div id={ 'name' }>{ product.name }</div>
                </div>
                <div id={ 'description' }>{ product.description }</div>
            </div>
            <div>
                <div id={ 'add' } onClick={ add }>ADD</div>
            </div>
        </div>
    )
}

export default Product;