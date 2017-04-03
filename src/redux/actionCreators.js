import { CHOOSE_WINNER, SAVE_WINNER, REJECT_WINNER, UPDATE_CONTESTANTS } from './actions'

export const chooseWinner = (winnerIndex) => {
  return { type: CHOOSE_WINNER, winnerIndex }
};

export const saveWinner = () => {
  return { type: SAVE_WINNER }
};

export const rejectWinner = () => {
  return { type: REJECT_WINNER }
};

export const updateContestants = (newContestants) => {
  return { type: UPDATE_CONTESTANTS, newContestants }
};
