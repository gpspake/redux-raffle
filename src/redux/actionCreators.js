import { CHOOSE_WINNER } from './actions'

const chooseWinner = (winnerIndex) => {
  return { type: CHOOSE_WINNER, winnerIndex }
};

export default chooseWinner;
