import React from "react";
import ReactDOM from "react-dom";
import GamesList from "./GamesList";

import "./index.css";

function App() {
  return (
    <div className="App">
      <GamesList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);