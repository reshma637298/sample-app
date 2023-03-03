import React from "react";
import CounterDisplay from "./CounterDisplay";

export const myStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  };

class CounterClass extends React.Component {
  constructor() {
    super();   //parent constructor
    this.state = {
      count: 0,
      
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    console.log('constructor triggered')
  }

  componentWillMount(){
    console.log('inside component will mount')
  }

  componentDidMount(){
    console.log('inside component did mount')
  }

  componentDidUpdate(){
    console.log('inside component did update')
  }

componentWillUpdate(){
    console.log('inside component will update')
}

  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    this.setState((previousValue) => ({
      count: previousValue.count - 1,
    }));
  }



  render() {
    console.log('inside render menthod')
   
    return (
      <div className="counter">
        <CounterDisplay count={this.state.count} />

        <button style={myStyle} onClick={this.increment}>
          +
        </button>
        <button style={myStyle} onClick={this.decrement}>
          -
        </button>
        <button style={myStyle} onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </div>
    );
  }
}

export default CounterClass;
