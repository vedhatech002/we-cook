import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./src/main.css";

const App = () => {
  return <h1>WE COOK intialize file</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
