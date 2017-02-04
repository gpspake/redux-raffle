import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import chooseWinner from './redux/actionCreators'


const App = React.createClass({
  handleClick() {
    store.dispatch(chooseWinner(1));
  },
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Choose Winner</button>
      </div>
    );
  }
});

export default App;
