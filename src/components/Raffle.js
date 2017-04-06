import React from 'react';
import logo from '../logo.svg';
import CurrentWinner from '../components/CurrentWinner'
import Winners from '../components/Winners'
import Contestants from '../components/Contestants'
import RaffleControls from '../containers/RaffleControlsContainer'
const { object, array } = React.PropTypes;

const Raffle = React.createClass({
  propTypes: {
    currentWinner: object,
    contestantsList: object,
    contestants: array,
    winners: array
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
          contestants={this.props.contestants}
          winner={this.props.currentWinner}/>
      </div>
    );
  }
});

export default Raffle;
