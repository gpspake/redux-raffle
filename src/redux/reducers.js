import { CHOOSE_WINNER, SAVE_WINNER, REJECT_WINNER, UPDATE_CONTESTANTS } from './actions'
import Data from '../data.json';

const DEFAULT_STATE = Data;

const chooseWinner = (state, action) => {
  const winner = state.contestantsList.contestants[action.winnerIndex];

  const contestants = [
    ...state.contestantsList.contestants.slice(0, action.winnerIndex),
    ...state.contestantsList.contestants.slice(action.winnerIndex + 1)
  ];

  const contestantsList = Object.assign({}, state.contestantsList, {contestants});

  return Object.assign({}, state, {winner}, {contestantsList});
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

const updateContestants = (state, action) => {
  //create a list of winner ids
  const winners = state.winners.map((winner) => winner.id);

  //add current winner to list of winner ids
  if(state.winner.id) { winners.push(state.winner.id) };

  console.log('winners', winners)

  //determine whether a person has already won
  //by checking their id against the list of winner ids
  const contestant = (person) => !winners.includes(person.id);

  //create a new contestants array that includes any new people but not winners
  const contestants = action.newContestants.filter( contestant );


  //return a new state object with the updated contestants
  return Object.assign({}, state, {contestants});
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_WINNER:
      return chooseWinner(state, action);
    case SAVE_WINNER:
      return saveWinner(state);
    case REJECT_WINNER:
      return rejectWinner(state);
    case UPDATE_CONTESTANTS:
      return updateContestants(state, action);
    default:
      return state
  }
};

export default rootReducer
