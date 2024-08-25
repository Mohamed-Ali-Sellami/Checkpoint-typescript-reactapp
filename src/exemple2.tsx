import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number;
}

// No props, so we use an empty object type for props
class Counter extends Component<{}, CounterState> {
  // Initialize the state with a type annotation
  state: CounterState = {
    count: 0,
  };

  // Correctly type the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;