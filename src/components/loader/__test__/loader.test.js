import React from "react";
import ReactDOM from "react-dom";
import Loader from "../Loader";
import { isTSAnyKeyword } from '@babel/types';

it("Loader Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader></Loader>,div) 
})

