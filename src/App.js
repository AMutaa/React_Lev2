import React, { Component, Fragment } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import './App.css';
import User from './User';
import UserProvider from './UserProvider';


class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />
          <section>
            <Toggle>
              {
                ({ on, toggle }) => (
                  <Fragment>
                    <button onClick={toggle}>Show/Hide</button>
                    {on && <h1>Show Me</h1>}
                  </Fragment>
                )}
            </Toggle>
          </section>
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
      </UserProvider>
    )
  }
}

export default App;
