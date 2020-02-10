import React from 'react';

function Product(props) { 
  console.log(props.product)
  let product = props.product
  return (
    <div id={"product"} key={props.product.id}>
      <table>
        <tbody>
          <tr>
            {product.product_name}
          </tr>
          <tr>
           {product.description}
          </tr>
          <tr>
            {product.price}
          </tr>
          <tr>
            <button>Add to cart</button>
          </tr>
        </tbody>
      </table>
    </div>
)}

export default Product;