import React, { Component } from 'react';
import Toggle from './ToggleRenderPropChildren';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Toggle>
          ({on, toggle}) => (
          <div>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </div>
          )
        </Toggle>
      </div>
    )
  }
}

export default App;
