import { CHOOSE_WINNER, SAVE_WINNER } from './actions'

export const chooseWinner = (winnerIndex) => {
  return { type: CHOOSE_WINNER, winnerIndex }
};

export const saveWinner = () => {
  return { type: SAVE_WINNER }
};
