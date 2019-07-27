import React, { Component } from "react";

/**
 * Functional stateless component example
 * Useful for when you don't need to track states
 */
function FunctionalComponent(props) {
  return (
    <div className="DemoComponent">
      <h1>Functional component with msg: {props.msg}</h1>
    </div>
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
      <div onClick={() => this.click()}>
          <h1>Class component with state. Click me! {this.state.expanded}</h1>
          {this.state.expanded && <p>Boo!</p>}
      </div>
    );
  }

  click() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
}

export { FunctionalComponent };
export { ClassComponent };
