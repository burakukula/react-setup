import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment() {
    this.setState( {
      count: this.state.count - 5
    });
  }
  render() {
    return (
      <div>
        <p>Counting: {this.state.count}</p>
        <button onClick={() => this.increment()}>Up</button>
      </div>
    );
  }
}
