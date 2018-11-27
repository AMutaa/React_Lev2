import React, { Component, Fragment } from 'react';
import Toggle from './Components/ToggleRenderPropChildren';
import Portal from './Components/Portal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {
            ({ on, toggle }) => (
              <Fragment>
                {on && <h1>Show Me</h1>}
                <button onClick={toggle}>Login</button>
                <Portal>{on && <h1>Hi, I'm in a portal</h1>}</Portal>

              </Fragment>
            )}
        </Toggle>
      </div >
    )
  }
}

export default App;
