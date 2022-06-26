import Loader from "../Loader";
import "@testing-library/jest-dom/extend-expect";  
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup); 


it("renders button correctly", () => {
    const  { getByTestId } = render(<Loader />)
    expect(getByTestId("loader")).toBeVisible;
})

