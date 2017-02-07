import { CHOOSE_WINNER, SAVE_WINNER, REJECT_WINNER } from './actions'
import Data from '../data.json';

const DEFAULT_STATE = Data;

const chooseWinner = (state, action) => {
  const winner = state.contestants[action.winnerIndex];

  const contestants = [
    ...state.contestants.slice(0, action.winnerIndex),
    ...state.contestants.slice(action.winnerIndex + 1)
  ];

  return Object.assign({}, state, { winner }, { contestants });
};

const saveWinner = (state) => {
  const winners = [...state.winners, state.winner];
  const winner = {};
  return Object.assign({}, state, {winners}, {winner});
};

const rejectWinner = (state) => {
  const contestants = [...state.contestants, state.winner]
  const winner = {}
  return Object.assign({}, state, {contestants}, {winner});
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_WINNER:
      return chooseWinner(state, action);
    case SAVE_WINNER:
      return saveWinner(state);
    case REJECT_WINNER:
      return rejectWinner(state);
    default:
      return state
  }
};

export default rootReducer
