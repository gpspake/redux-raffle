import React from 'react';

const CurrentWinner = React.createClass({
  render() {
    if(this.props.winner.name) {
      return (
        <div className="current-winner">
          <h2>Current Winner</h2>
          <p>{this.props.winner ? this.props.winner.name : ''}</p>
          <button>Not Here</button>
          <button onClick={this.props.saveWinner}>Play Again</button>
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
