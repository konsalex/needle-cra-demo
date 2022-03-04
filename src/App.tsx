import React from "react";
import logo from "./logo.svg";
import "./App.css";

// We need to include CSS from the base in the root of the app
import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";
import { Button } from "@neo4j-ndl/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="ndl-btn n-p-4 n-text-subheading-medium n-bg-danger-40">
          Test Tailwind
        </button>
        {/* <Button fill="outlined">Demo Button</Button> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
