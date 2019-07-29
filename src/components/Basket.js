import React, { Component} from "react";
import "./Basket.css"
import {Company} from "./Company.js";


class Basket extends Component {
  render() {
    return (
      <div className="Basket">
        <h1>{this.props.title}</h1>
        {this.props.jobs.map((d, index) =>
          <Company
            key={index}
            company={d}
            onClickAdd={this.props.onClickAdd}
            onClickOffer={this.props.onClickOffer}
            onClickReject={this.props.onClickReject}
            onClickDelete={this.props.onClickDelete}
          />
        )}
        </div>
      );
  }
}

export {Basket};