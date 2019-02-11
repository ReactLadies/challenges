import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { counter: 0 }
  }

  add = () => this.setState({ counter: this.state.counter + 1 })

  render() {
    return (
      <div className="App">
       <h1>React Counter</h1>
       <p>{ this.state.counter }</p>

       <div>
         <button onClick={this.add}>+</button>
       </div>
      </div>
    );
  }
}

export default App;
