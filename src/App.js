import React, { Component, Fragment } from 'react';
import Toggle from './Components/ToggleRenderPropChildren';
import Portal from './Components/Portal';
import Modal from './Components/Modal';
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
                <Modal on={on} toggle={toggle}>
                  <h1>Still In Modal: Login Page</h1>
                </Modal>
              </Fragment>
            )}
        </Toggle>
      </div >
    )
  }
}

export default App;
