import React from "react";
import ReactDOM from "react-dom";

import Planets from "./Planets";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Planets />
  </React.StrictMode>,
  rootElement
);
