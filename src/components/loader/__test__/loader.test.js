import ReactDOM from "react-dom";
import Loader from "../Loader";


it("Loader Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader></Loader>,div) 
})

