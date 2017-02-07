import React from 'react';
const { arrayOf, shape, string } = React.PropTypes;

const Contestants = React.createClass({
  propTypes: {
    contestants: arrayOf(shape({
        id: string,
        name: string
      })
    )
  },
  render() {
    console.log('winners winners...', this.props.winners)
    return (
      <div className="winners">
        <h2>Contestants</h2>
        <ul>
          { this.props.contestants.map( (contestant) => { return <li key={contestant.id}>{contestant.name}</li> } ) }
        </ul>
      </div>
    );
  }
});

export default Contestants
