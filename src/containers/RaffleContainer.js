import {connect} from 'react-redux';
import '../App.css';
import Raffle from '../components/Raffle';

const mapStateToProps = (state) => {
  return {
    contestantsList: state.contestantsList,
    contestants: state.contestantsList.contestants,
    winners: state.winners,
    currentWinner: state.winner,
  };
};

export default connect(mapStateToProps)(Raffle);
