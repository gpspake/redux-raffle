import { CHOOSE_WINNER, SAVE_WINNER, REJECT_WINNER, UPDATE_CONTESTANTS, FETCH_CONTESTANTS,FETCH_CONTESTANTS_SUCCESS, FETCH_CONTESTANTS_FAILURE } from './actions';
import axios from 'axios';

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

export const fetchContestants = () => {
  const request = axios.get('https://gist.githubusercontent.com/gpspake/4576702f5e3533045c53ebc15c205572/raw/3c1e54e3bd08aeda9f2b232b2db483ba5e7414b7/contestants.json');
  console.log(request);
  return {
    type: FETCH_CONTESTANTS,
    newContestants: request
  }
};

export const fetchContestantsSuccess = (newContestants) => {
  return { type: FETCH_CONTESTANTS_SUCCESS, newContestants }
};

export const fetchContestantsFailure = () => {
  return { type: FETCH_CONTESTANTS_FAILURE }
};
