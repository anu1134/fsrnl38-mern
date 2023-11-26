import React from "react";

class ProfileClass extends React.Component {
  // this.props
  constructor(props) {
    super(props);
    console.log("child constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component has been mounted");

    this.timer = setInterval(() => {
      console.log("interval created");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("child component updated");
    }
  }

  componentWillUnmount() {
    console.log("child component unmounted");
    clearInterval(this.timer);
  }

  updateCount() {
    this.setState({ count: 1 });
  }

  render() {
    console.log("child component rendered");
    return (
      <>
        <h1>Profile class based component</h1>
        <h2>name: {this.props.name}</h2>
        <h2>color: {this.props.color}</h2>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.updateCount.bind(this)}>Update Count</button>
      </>
    );
  }
}

export default ProfileClass;
