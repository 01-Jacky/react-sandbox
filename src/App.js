import React, {Component} from "react";
import {Basket} from './components/Basket'

import "./App.css";

let defaultToApply =[
  {
    "id": "Google Site Reliablity Engineer",
    "companyName":"Google",
    "position": "Site Reliablity Engineer",
    "applied": false,
    "waitForResponse": false,
  },
  {
    "id" : "Amazon Software Development Engineer 1",
    "companyName":"Amazon",
    "position": "Software Development Engineer 1",
    "applied": false,
  }
];

let defaultApplied =[
  {
    "id": "Airbnb Backend Engineer",
    "companyName":"Airbnb",
    "position": "Backend Engineer",
    "applied": true,
    "waitForResponse": true,
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoApplyBasket: [],
      appliedBasket: [],
      acceptedBasket: [],
      rejectedBasket: [],
    };

    this.state.todoApplyBasket = defaultToApply;
    this.state.appliedBasket = defaultApplied;

    if(localStorage.getItem('b1')) {
      console.log(localStorage.getItem('b1'));
      this.state = JSON.parse(localStorage.getItem('b1'));
    }
  }


  handleClickAdd(value){
    let newItem = {
      "id": document.getElementById("inputCompanyName").value + " " + document.getElementById("inputCompanyName").value,
      "companyName": document.getElementById("inputCompanyName").value,
      "position": document.getElementById("inputPosition").value,
      "applied": false,
      "waitForResponse": false,
    }

    this.setState(
      {...this.state, todoApplyBasket: [...this.state.todoApplyBasket, newItem]}
    );
  }

  handleClickSave(){
    localStorage.setItem('b1', JSON.stringify(this.state));
  }

  handleClickReset(){
    console.log("reset");

    let defaultToApply =[
      {
        "id": "Google Site Reliablity Engineer",
        "companyName":"Google",
        "position": "Site Reliablity Engineer",
        "applied": false,
        "waitForResponse": false,
      },
      {
        "id" : "Amazon Software Development Engineer 1",
        "companyName":"Amazon",
        "position": "Software Development Engineer 1",
        "applied": false,
      }
    ];

    let defaultApplied =[
      {
        "id": "Airbnb Backend Engineer",
        "companyName":"Airbnb",
        "position": "Backend Engineer",
        "applied": true,
        "waitForResponse": true,
      }
    ];

    this.setState(
      {
        todoApplyBasket: defaultToApply,
        appliedBasket: defaultApplied,
        acceptedBasket: [],
        rejectedBasket: [],
      }
    );
  }

  handleClickApplied(jobId){
    let basket = this.state.todoApplyBasket;
    let indexFound = -1;
    for (let i=0; i<basket.length; ++i){
      if (basket[i]['id'] === jobId){
        indexFound = i;
      }
    }

    let jobAppliedTo = basket[indexFound];
    jobAppliedTo.applied = true;
    jobAppliedTo.waitForResponse = true;
    this.state.todoApplyBasket.splice(indexFound, 1);  // Remove it

    this.setState(
      {...this.state, appliedBasket: [...this.state.appliedBasket,jobAppliedTo]}
    );
  }

  handleClickOffer(jobId){
    let basket = this.state.appliedBasket;
    let indexFound = -1;
    for (let i=0; i<basket.length; ++i){
      if (basket[i]['id'] === jobId){
        indexFound = i;
      }
    }

    let jobResponded = basket[indexFound];
    jobResponded.waitForResponse = false;
    this.state.appliedBasket.splice(indexFound, 1);  // Remove it

    this.setState(
      {...this.state, acceptedBasket: [...this.state.acceptedBasket,jobResponded]}
    );
  }

  handleClickReject(jobId){
    let basket = this.state.appliedBasket;
    let indexFound = -1;
    for (let i=0; i<basket.length; ++i){
      if (basket[i]['id'] === jobId){
        indexFound = i;
      }
    }

    let jobResponded = basket[indexFound];
    jobResponded.waitForResponse = false;
    this.state.appliedBasket.splice(indexFound, 1);  // Remove it

    this.setState(
      {...this.state, rejectedBasket: [...this.state.rejectedBasket,jobResponded]}
    );
  }

  handleClickDelete(jobId){
    let deleted = false;

    let basket = this.state.todoApplyBasket;
    let indexFound = -1;
    for (let i=0; i<basket.length; ++i){
      if (basket[i]['id'] === jobId){
        indexFound = i;
        deleted = true;
      }
    }
    if (deleted){
      this.state.todoApplyBasket.splice(indexFound, 1);  // Remove it
      this.setState({...this.state});
      return;
    }

    let basket2 = this.state.appliedBasket;
    let indexFound2 = -1;
    for (let i=0; i<basket2.length; ++i){
      if (basket2[i]['id'] === jobId){
        indexFound2 = i;
        deleted = true;
      }
    }
    if (deleted){
      this.state.appliedBasket.splice(indexFound2, 1);  // Remove it
      this.setState({...this.state});
      return;
    }

    let basket3 = this.state.acceptedBasket;
    let indexFound3 = -1;
    for (let i=0; i<basket3.length; ++i){
      if (basket3[i]['id'] === jobId){
        indexFound3 = i;
        deleted = true;
      }
    }
    if (deleted){
      this.state.acceptedBasket.splice(indexFound3, 1);  // Remove it
      this.setState({...this.state});
      return;
    }

    let basket4 = this.state.rejectedBasket;
    let indexFound4 = -1;
    for (let i=0; i<basket4.length; ++i){
      if (basket4[i]['id'] === jobId){
        indexFound4 = i;
        deleted = true;
      }
    }
    if (deleted){
      this.state.rejectedBasket.splice(indexFound4, 1);  // Remove it
      this.setState({...this.state});
      return;
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-box">Job Tracker</h1>
        </header>

        <div>
          <p>Add a company you want to work for...</p>
          <div className="AddJob">
          <label>Company</label>
          <input type="text" id="inputCompanyName"></input>
          <label>Position</label>
          <input type="text" id="inputPosition"></input>
          <button type="button" onClick={() => this.handleClickAdd()}>Add</button>
        </div>

        <div>
          <button type="button" onClick={() => this.handleClickSave()}>Save Progress</button>
          <button type="button" onClick={() => this.handleClickReset()}>Reset App</button>
        </div>
      </div>

        <Basket
          title="📝 To Apply 📝"
          jobs={this.state.todoApplyBasket}
          onClickAdd={(id) => this.handleClickApplied(id)}
          onClickDelete={(id) => this.handleClickDelete(id)}
        />
        <Basket
          title="⌛ Waiting for Response ⌛"
          jobs={this.state.appliedBasket}
          onClickOffer={(id) => this.handleClickOffer(id)}
          onClickReject={(id) => this.handleClickReject(id)}
          onClickDelete={(id) => this.handleClickDelete(id)}
          />
        <Basket
          title="🎉 Accepted 🎉"
          jobs={this.state.acceptedBasket}
          onClickDelete={(id) => this.handleClickDelete(id)}
        />
        <Basket
          title="😭 Rejected 😭"
          jobs={this.state.rejectedBasket}
          onClickDelete={(id) => this.handleClickDelete(id)}
        />


      </div>
    );
  }
}

export default App;
