import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       <Profile />
//       <ProfileClass name="anshika" color="red" />
//     </>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component mounted");
  }

  componentDidUpdate() {
    console.log("parent component updated");
  }

  componentWillUnmount() {
    console.log("parent component unounted");
  }

  render() {
    console.log("parent rendered");
    return (
      <>
        <h1>About</h1>
        {/* <Profile /> */}
        <ProfileClass name="anshika" color="red" />
      </>
    );
  }
}

export default About;

/**
 * parent constructor
 * parent rendered
 * child constructor
 * child rendered
 * child mounted
 * parent mounted
 * parent unmounted
 * child unmounted
 */
