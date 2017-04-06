import React from 'react';
const { func, object } = React.PropTypes;

const CurrentWinner = React.createClass({
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
          <h2>Current Winner</h2>
          <p>{this.props.winner ? this.props.winner.name : ''}</p>
          <button onClick={this.handleNotHere}>Not Here</button>
          <button onClick={this.handlePlayAgain}>Play Again</button>
          <button onClick={this.props.saveWinner}>Finished</button>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
});

export default CurrentWinner;
