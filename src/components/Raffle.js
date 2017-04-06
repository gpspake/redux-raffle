import React from 'react';
import logo from '../logo.svg';
import CurrentWinner from '../components/CurrentWinner'
import Winners from '../components/Winners'
import Contestants from '../components/Contestants'
import RaffleControls from '../components/RaffleControls'
const { func, object, array } = React.PropTypes;

const Raffle = React.createClass({
  propTypes: {
    dispatchChooseWinner: func,
    dispatchSaveWinner: func,
    dispatchRejectWinner: func,
    currentWinner: object,
    contestantsList: object,
    contestants: array,
    winners: array
  },
  handleChooseWinner() {
    if (this.props.contestants.length >= 1) {
      const randomContestant = Math.floor(Math.random() * (this.props.contestants.length - 1));
      this.props.dispatchChooseWinner(randomContestant);
    }
  },
  handleSaveWinner() {
    this.props.dispatchSaveWinner();
  },
  handleRejectWinner() {
    this.props.dispatchRejectWinner();
  },
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CurrentWinner
          winner={this.props.currentWinner}/>
        <Contestants contestants={this.props.contestants} />
        <Winners winners={this.props.winners} />
        <RaffleControls
          winner={this.props.currentWinner}
          saveWinner={this.handleSaveWinner}
          rejectWinner={this.handleRejectWinner}
          chooseWinner={this.handleChooseWinner}/>
      </div>
    );
  }
});

export default Raffle;
