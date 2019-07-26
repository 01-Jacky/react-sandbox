import React from "react";
import logo from "./assets/images/logo.svg";
import "./App.css";

import {FunctionalComponent, ClassComponent} from './components/DemoComponents'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-box">
          <img src={logo} className="App-logo" alt="logo" />React Sandbox
        </h1>
      </header>

      <section>
        <FunctionalComponent></FunctionalComponent>
        <ClassComponent></ClassComponent>
      </section>
    </div>
  );
}

export default App;
