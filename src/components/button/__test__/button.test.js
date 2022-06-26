import Button from "../Button";
import "@testing-library/jest-dom/extend-expect";  

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup); 

it("renders button correctly", () => {
    const  { getByTestId } = render(<Button text="Siguiente"></Button>)
    expect(getByTestId("button")).toHaveTextContent("Siguiente");
})
 
it("check if button is Enabled", () => {
    const  { getByTestId } = render(<Button text="Siguiente"  disabled={true}></Button>)
    expect(getByTestId("button")).not.toBeEnabled;
})
 
 