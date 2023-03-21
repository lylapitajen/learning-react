import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));

//CLASS COMPONENTS

class Hello extends React.Component {
  render() {
    return <h1>Hello there! </h1>;
  }
}
ReactDOM.render(<Hello />, document.getElementById("root")); // second argument is where the component is rendered

//FUNCTION COMPONENTS
function HelloWorld() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

//INTRODUCTION TO JSX
class JSXDemo extends React.Component {
  render() {
    return (
      // can only return a single element, so needs to be wrapped in a parent element i.e. a div
      <div>
        <img src="https://images.unsplash.com/photo-1582402512074-5895b456c856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" />
        <h1>My number is {24 + 5}</h1>
      </div>
    );
  }
}
//JS expressions can be embedded into JSX, wrapped in curly braces
// ReactDOM.render(<JSXDemo />, document.getElementById("root"));

//PROPS
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" />
        <Hello />
      </div>
    );
  }
}
root.render(<App />);
