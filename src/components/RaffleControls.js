import React from 'react';
const { func, object } = React.PropTypes;

const RaffleControls = React.createClass({
  propTypes: {
    chooseWinner: func,
    saveWinner: func,
    rejectWinner: func,
    winner: object
  },
  handleNotHere(){
    this.props.rejectWinner();
    this.props.chooseWinner();
  },
  handlePlayAgain(){
    this.props.saveWinner();
    this.props.chooseWinner();
  },
  render() {
    if(this.props.winner.name) {
      return (
        <div className="current-winner">
          <button onClick={this.handleNotHere}>Skip winner and play again</button>
          <button onClick={this.handlePlayAgain}>Save winner and play again</button>
          <button onClick={this.props.saveWinner}>Save winner and finish</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.props.chooseWinner}>Choose Winner</button>
      )
    }
  }
});

export default RaffleControls;
