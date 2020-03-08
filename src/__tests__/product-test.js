import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import { Context, Provider } from '../components/context'
import Product from '../components/shop/product'

afterEach(cleanup)

describe("Render the shop page with a single product, ", () => {

  const exampleContext = Context
  
  const details = {
    name: "Test product",
    price: 50,
    description: "This is a test description.",
    quantity: 30
  }

  const tree = (
    <Provider value={exampleContext} >
      <Product details={details} id={0}/>
    </Provider>
  )

  const state = {
    logged: false
  }

  

  describe("and check that the relevant components are rendered;", () => {

    it("the product price is rendered", () => {
      const { getByText } = render(tree)
      getByText(/50/i)
    })

    it("the product name is rendered", () => {
      const { getByText } = render(tree)
      expect(getByText(/Test product | 30/i))
    })

    it("the product description is rendered", () => {
      const { getByText } = render(tree)
      expect(getByText(/This is a test description./))
    })

    it("the button is rendered", () => {
      const { getByText } = render(tree)
      getByText(/add/i)
    })
  })

  describe("verify the add/del buttons functionality", () => {
    it("initial text is add", () => {
      const { getByText } = render(tree)
      getByText(/add/i)
    })

    it("set text to del on button click", () => {
      const { getByText } = render(tree)
      fireEvent.click(getByText(/add/i))
      getByText(/del/i)
    })

    it("set text back to del on 2nd button click", () => {
      const { getByText } = render(tree)
      fireEvent.click(getByText(/add/i))
      fireEvent.click(getByText(/del/i))
      console.log(state.logged)
      getByText(/add/i)
    })
  })
})

