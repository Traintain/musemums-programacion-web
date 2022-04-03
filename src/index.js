import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Museums from "./components/museums/museums";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

/**Los componentes pueden declararse como una constante o como una función */

root.render(<Museums />);
