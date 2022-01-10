import React, { Component } from "react";

class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      naem: "Kiraz",
    };
    console.log("LifecycleB Constructor Called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerived State From Props");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB component did mount method");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB should Component Update");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB component Did Update");
  }

  render() {
    console.log("LifecycleB Render");

    return (
      <div>
        <h1>Lifecycle</h1>
      </div>
    );
  }
}

export default Demo1;
