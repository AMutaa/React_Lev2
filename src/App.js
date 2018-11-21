import React, { Component, Fragment } from 'react';
import Toggle from './ToggleRenderPropChildren';


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
                < button onClick={toggle}>Show/Hide</button>
              </Fragment>
            )}
        </Toggle>
      </div >
    )
  }
}

export default App;
