import React, { Component} from "react";
import "./Basket.css"
import {Company} from "./Company.js";

/**
 * Class component example
 * Useful for when you need more out of your component, like states
 */
class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
    this.click = this.click.bind(this);
  }

  render() {
    const listItems = this.props.jobs.map((d, index) =>
      <Company key={index} company={d} onClick={this.props.onClick}></Company>
    );
    let msg = this.props.title;

    return (
      <div className="Basket" onClick={(value) => this.click}>
        <h1>{msg}</h1>
        {listItems}
      </div>
    );
  }

  click() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
}

export {Basket};