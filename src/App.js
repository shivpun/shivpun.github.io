import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";

import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Provider } from "react-redux";
// createStore allows us to load/unload modules dynamically.
import { createStore } from "redux-dynamic-modules-core";
// Saga extension allows us to use Saga middleware in the module store.
import { getSagaExtension } from "redux-dynamic-modules-saga";
// Thunk extension allows us to use Thunk middleware in the module store.
import { getThunkExtension } from "redux-dynamic-modules-thunk";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = createStore({
      enhancements: [offline(offlineConfig)],
      extensions: [getThunkExtension(), getSagaExtension()],
    });
  }

  renderContent = () => {
    const ContactComponent = lazy(()=>import('./features/contact'));
    return (
      <>
        <Provider store={this.store}>
        <Suspense fallback={<div>Loading....</div>}>
          <>
            <ContactComponent />
          </>
        </Suspense>
        </Provider>
      </>
    );
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      {this.renderContent()}
    </div>
  );
  }
}



export default App;
