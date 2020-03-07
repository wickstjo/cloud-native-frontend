import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import Product from '../components/shop/product'

if("Product is rendered", () =>{
  const {queryByText, getByText} = render(
    <Product />
  )
  expect()
})