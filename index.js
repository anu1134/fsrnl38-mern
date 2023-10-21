import React from "react";
import ReactDOM from "react-dom";

// React Element ====> JS Object ====> HTML

const header = React.createElement("h1", { id: 1 }, "Hello World using React");

// JSX -----> HTML like syntax or XML like syntax
// Babel ----> Javascript compiler or transpiler
// JSX ------> React Element ------> JS Object ------> HTML

const header1 = (
  <div>
    <h1 id="1">Hello World using React 1123</h1>

    <h2></h2>
  </div>
);

// React Components

// Functional Components ----- New Way
// Class Based Components ----- Old way

// JS Function which returns JSX (React Element)

const HeaderComponent = () => {
  return <h1>Header Component</h1>;
};

const Headercc = () => <h1>Header Component</h1>;

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeaderComponent />);

console.log("Learning React");
