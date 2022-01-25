import React from "react"
import ReactDOM from "react-dom"
import Button from "../Button"
import {render} from "@testing-library/react"
import renderer from "react-test-renderer"

it("renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Button></Button>,div)
})

it("renders button correctly",()=>{
    const{getByTestId}=render(<Button></Button>)
    expect(getByTestId("button")).toHaveTextContent("click me")
})


it("matches snapshot",()=>{
    const tree = renderer.create(<Button></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

