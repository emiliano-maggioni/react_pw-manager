import React from "react";
import ReactDOM from "react-dom";
import TitleBar from "../TitleBar";
import { isTSAnyKeyword } from '@babel/types';

it("TitleBar Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TitleBar title="Bienvenido a la Cuenta Corriente OpenClose" />,div) 
})

// it("TitleBar Renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<TitleBar title="Bienvenido a la Cuenta Corriente OpenClose" />,div);
//     expect(getByTestId('h2Title')
//     ).toHaveTextContent("Bienvenido a la Cuenta Corriente OpenClose");

// })
