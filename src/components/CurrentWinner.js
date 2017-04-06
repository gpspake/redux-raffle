import React from 'react';
const { object } = React.PropTypes;

const CurrentWinner = React.createClass({
  propTypes: {
    winner: object
  },
  render() {
    if(this.props.winner.name) {
      return (
        <div className="current-winner">
          <h2>Current Winner</h2>
          <p>{this.props.winner ? this.props.winner.name : ''}</p>
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
