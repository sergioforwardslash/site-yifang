import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { BackgroundImageProvider } from "./components/backgroundimage/BackgroundImage";

ReactDOM.render(
  <BackgroundImageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BackgroundImageProvider>,
  document.getElementById("root")
);
