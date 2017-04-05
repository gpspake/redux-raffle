import React from 'react';
import logo from '../logo.svg';
import CurrentWinner from '../CurrentWinner'
import Winners from '../Winners'
import Contestants from '../Contestants'

const Raffle = React.createClass({
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
          winner={this.props.currentWinner}
          saveWinner={this.handleSaveWinner}
          rejectWinner={this.handleRejectWinner}
          chooseWinner={this.handleChooseWinner}/>
        <Contestants contestants={this.props.contestants} />
        <Winners winners={this.props.winners} />
        <button onClick={this.handleChooseWinner}>Choose Winner</button>
      </div>
    );
  }
});

export default Raffle;
