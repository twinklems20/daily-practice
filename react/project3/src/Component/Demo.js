import React, { Component } from "react";
import Demo1 from "./Demo1";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      naem: "Kiraz",
    };
    console.log("LifecycleA Constructor Called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerived State From Props");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA component did mount method");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA component Did Update");
  }

  changeState = () => {
    this.setState({
      name: "Twinkle",
    });
  };

  render() {
    console.log("LifecycleA Render");

    return (
      <>
        <div>
          <h1>Lifecycle</h1>
        </div>
        <button onClick={this.changeState}>Change State</button>
        <Demo1 />
      </>
    );
  }
}

export default Demo;
