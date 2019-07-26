import React, { Component } from "react";

/**
 * Functional stateless component example
 * Useful for when you don't need to track states
 */
function FunctionalComponent(props) {
  return (
    <div>Functional component with msg: {props.msg}</div>
  );
}

/**
 * Class component example
 * Useful for when you need more out of your component, like states
 */
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.click = this.click.bind(this);
  }

  render() {
      return (
          <div>Class component with state: {this.state.expanded}</div>
      );
  }

  click() {
      this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
}

export {FunctionalComponent};
export {ClassComponent}
