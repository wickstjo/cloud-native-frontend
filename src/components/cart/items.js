import React, { useContext, Fragment } from 'react';
import { Context } from "../context";
import '../../interface/css/innerbody.scss';
import '../../interface/css/cart.scss';
import Item from "./item";
import Result from "./result";

function Items() {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // SWITCH CONTENT
    switch(Object.keys(state.cart).length) {
        
        // NO ITEMS EXIST
        case 0: { return (
            <div id={ 'empty' }>The cart contains nothing.</div>
        )}

        // SOME ITEMS EXIST
        default: { return (
            <Fragment>
                { Object.keys(state.cart).map((id, index) =>
                    <Item
                        id={ id }
                        key={ index }
                    />
                )}
                <Result
                    cart={ state.cart }
                    products={ state.products }
                />
            </Fragment>
        )}
    }
}

export default Items;