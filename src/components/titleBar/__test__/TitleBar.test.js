import TitleBar from "../TitleBar";
import "@testing-library/jest-dom/extend-expect";  

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup); 
 
it("itleBar renders correctly", () => {
    const  { getByTestId } = render(<TitleBar title="Bienvenido a la Cuenta Corriente OpenClose" />)
    expect(getByTestId("h2Title")).toHaveTextContent("Bienvenido a la Cuenta Corriente OpenClose");
})
