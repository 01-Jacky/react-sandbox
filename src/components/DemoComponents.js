import React, { Component, useState } from "react";

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
          <h1>
            Class component with state. Click me...
            {this.state.expanded} {this.state.expanded && 'Boo!'}
          </h1>

      </div>
    );
  }

  click() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
}

/** Functional stateless component with state using hooks (React 16.8 and above) */
function FunctionalComponentWithHooks(props) {
  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      <h1>Functional component with hooks... clicked me {count} time
      </h1>

    </div>
  );
}

export { FunctionalComponent, ClassComponent, FunctionalComponentWithHooks};