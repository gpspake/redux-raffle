import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import CurrentWinner from './CurrentWinner'
import Winners from './Winners'
import Contestants from './Contestants'
import { chooseWinner, saveWinner } from './redux/actionCreators'

const Raffle = React.createClass({
  handleChooseWinner() {
    this.props.dispatchChooseWinner(1)
  },
  handleSaveWinner() {
    console.log('winner saved')
    this.props.dispatchSaveWinner();
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
          <CurrentWinner winner={this.props.currentWinner} saveWinner={this.handleSaveWinner}/>
          <Contestants contestants={this.props.contestants} />
          <Winners winners={this.props.winners} />
          <button onClick={this.handleChooseWinner}>Choose Winner</button>
        </div>
    );
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChooseWinner (winnerIndex) {
      dispatch(chooseWinner(winnerIndex))
    },
    dispatchSaveWinner (winnerIndex) {
      dispatch(saveWinner(winnerIndex))
    }
  }
}

const mapStateToProps = (state) => {
  console.log('state...', state);
  return {
    contestants: state.contestants,
    winners: state.winners,
    currentWinner: state.winner,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Raffle);