import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import { Context, Provider } from '../components/context'
import Product from '../components/shop/product'
import Item from '../components/cart/item'
import { act } from 'react-dom/test-utils'

/* Requires components/shop/product.js to export button separately
it("The button in product changes on click", () =>{
  const component = render(<Button />)
  console.log(component)
  expect(component.queryByText("ADD")).toBeTruthy();
  fireEvent.click(component.queryByText("ADD"));
  console.log(component)
})*/
afterEach(cleanup)

describe("Render the shop page with a single product, ", () => {

  const exampleContext = Context
  
  const details = {
    name: "Test product",
    price: 50,
    description: "This is a test description."
  }

  const tree = (
    <Provider value={exampleContext} >
      <Product details={details} id={0}/>
    </Provider>
  )

  

  describe("and check that the relevant components are rendered;", () => {

    it("the product price is rendered", () => {
      const { getByText } = render(tree)
      getByText(/50/i)
    })

    it("the product name is rendered", () => {
      const component = render(tree)
      expect(component.getByText(details.name))
    })

    it("the product description is rendered", () => {
      const component = render(tree)
      expect(component.getByText(details.description))
    })

    it("the button is rendered", () => {
      const { getByText } = render(tree)
      getByText(/add/i)
    })
  })

  describe("and verify the buttons functionality;", () => {
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
      getByText(/add/i)
    })

    /* 
    it("check that the cart includes the added product", () => {
      let component = null
      act(() => {
        component = render(tree)
        fireEvent.click(component.getByText(/add/i))
      })
      console.log(exampleContext)
      component.getByText(/add/i)
    })*/
  })
})

