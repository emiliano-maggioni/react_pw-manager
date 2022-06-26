import ReactDOM from "react-dom";
import Button from "../Button";
import { isTSAnyKeyword } from '@babel/types';
import { render } from '@testing-library/react';
// import "@testing-library/jest-dom/extend-expect"; 



it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div) 
})


// it("renders button correctly", () => {
//     const  { getByTestId } = render(<Button text="Siguiente"></Button>)
//     expect(getByTestId("button")).toHaveTextContent("Siguiente");
// })
 
 