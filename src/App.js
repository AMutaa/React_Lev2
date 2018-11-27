import React, { Component, Fragment } from 'react';
import Toggle from './Components/ToggleRenderPropChildren';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {
            ({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>

              </Fragment>
            )}
        </Toggle>

      </div >
    )
  }
}

export default App;
