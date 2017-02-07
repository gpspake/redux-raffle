import React from 'react';
const { arrayOf, shape, string } = React.PropTypes;

const Winners = React.createClass({
  propTypes: {
    winners: arrayOf(shape({
        id: string,
        name: string
      })
    )
  },
  render() {
    console.log('winners winners...', this.props.winners)
    return (
      <div className="winners">
        <h2>Winners</h2>
        <ul>
          { this.props.winners.map( (winner) => {return <li key={winner.id}>{winner.name}</li> } ) }
        </ul>
      </div>
    );
  }
});

export default Winners
