import React, {Component} from "react";
import {Basket} from './components/Basket'

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    const testJobs =[
      {
        "companyName":"Google",
        "position": "Site Reliablity Engineer",
        "applied": false,
        "id": "Google Site Reliablity Engineer"
      },
      {
        "companyName":"Amazon",
        "position": "Software Development Engineer 1",
        "applied": false,
        "id" : "Amazon Software Development Engineer 1"
      }
    ];

    this.state = {
      todoApplyBasket: [],
      appliedBasket: [],
      accepted: [],
      rejected: [],
      xIsNext: true,
    };

    this.state.todoApplyBasket = testJobs
  }

  handleClickApplied(value){
    console.log("I applied " + value);

  }

  handleClickAdd(value){
    console.log("im clicked with: "
      + document.getElementById("inputCompanyName").value
      + document.getElementById("inputPosition").value
    );

    let newItem = {
      "companyName": document.getElementById("inputCompanyName").value,
      "position": document.getElementById("inputPosition").value,
      "applied": false,
      "id": document.getElementById("inputCompanyName").value + " " + document.getElementById("inputCompanyName").value,
    }

    this.setState(
      {...this.state, todoApplyBasket: [...this.state.todoApplyBasket, newItem]}
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-box">Job Tracker</h1>
        </header>

        <p>Add a company you want to work for...</p>
        <div className="AddJob">
        <label>Company</label>
        <input type="text" id="inputCompanyName"></input>
        <label>Position</label>
        <input type="text" id="inputPosition"></input>
        <button type="button" onClick={() => this.handleClickAdd()}>Add</button>
      </div>

        <Basket
          title="To Apply"
          jobs={this.state.todoApplyBasket}
          onClick={(value) => this.handleClickApplied(value)}
        />
        <Basket
          title="⌛ Waiting for Response ⌛"
          jobs={this.state.appliedBasket}
          />
        <Basket
          title="🎉 Accepted 🎉"
          jobs={this.state.accepted}
        />
        <Basket
          title="❌ Rejected ❌"
          jobs={this.state.rejected}
        />


      </div>
    );
  }
}

export default App;
