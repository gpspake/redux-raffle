import React from 'react';
const { func, object, array } = React.PropTypes;

const RaffleControls = React.createClass({
  propTypes: {
    dispatchChooseWinner: func,
    dispatchSaveWinner: func,
    dispatchRejectWinner: func,
    winner: object,
    contestants: array
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
  handleNotHere(){
    this.handleRejectWinner();
    this.handleChooseWinner();
  },
  handlePlayAgain(){
    this.handleSaveWinner();
    this.handleChooseWinner();
  },
  render() {
    if(this.props.winner.name) {
      return (
        <div className="current-winner">
          <button onClick={this.handleNotHere}>Skip winner and play again</button>
          <button onClick={this.handlePlayAgain}>Save winner and play again</button>
          <button onClick={this.handleSaveWinner}>Save winner and finish</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleChooseWinner}>Choose Winner</button>
      )
    }
  }
});

export default RaffleControls;
