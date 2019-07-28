import React, { Component } from "react";

/**
 * Container component example
 * Good for things like providing data and behavior to their children components
 */
class ContainerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch('/api/myroute/...')
       .then(response => response.json())
       .then(images => this.setState({images}));
 }

  render() {
    return (
      <div className="ContainerDemo">
      </div>
    );
  }

}