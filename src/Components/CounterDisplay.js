import React from "react";

class CounterDisplay extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="counter">
        <h3>Class component</h3>
        <p>Count is : {this.props.count}</p>
      </div>
    );
  }
}

export default CounterDisplay;
