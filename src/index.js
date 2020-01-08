import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Calc from "./calc";

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calc />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
