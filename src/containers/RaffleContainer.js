import {connect} from 'react-redux';
import '../App.css';
import { chooseWinner, saveWinner, rejectWinner } from '../redux/actionCreators'
import Raffle from '../components/Raffle';

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChooseWinner (winnerIndex) {
      dispatch(chooseWinner(winnerIndex))
    },
    dispatchSaveWinner (winnerIndex) {
      dispatch(saveWinner(winnerIndex))
    },
    dispatchRejectWinner (winnerIndex) {
      dispatch(rejectWinner(winnerIndex))
    }
  }
};

const mapStateToProps = (state) => {
  return {
    contestants: state.contestantsList.contestants,
    winners: state.winners,
    currentWinner: state.winner,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Raffle);
