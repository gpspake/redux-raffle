import { CHOOSE_WINNER } from './actions'

const DEFAULT_STATE = {};

const chooseWinner = (state, action) => {
  const winner = state.contestants[action.winnerIndex];

  const contestants = [
    ...state.contestants.slice(0, action.winnerIndex),
    ...state.contestants.slice(action.winnerIndex + 1)
  ];

  return Object.assign({}, state, { winner }, { contestants });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_WINNER:
      return chooseWinner(state, action);
    default:
      return state
  }
};

export default rootReducer
