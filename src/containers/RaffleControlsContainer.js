import {connect} from 'react-redux';
import '../App.css';
import { chooseWinner, saveWinner, rejectWinner, fetchContestants } from '../redux/actionCreators'
import RaffleControls from '../components/RaffleControls';

const mapStateToProps = () => {
  return {};
};

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
    },
    dispatchFetchContestants () {
      dispatch(fetchContestants())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RaffleControls);
