import { saveWinner } from '../redux/actionCreators'
import rootReducer from '../redux/reducers'
import deepFreeze from 'deep-freeze';

it('accepts the current winner', () => {

  const initialState = {
    "contestantsList": {
      "contestants": [
        {"id": "111", "name": "john"},
        {"id": "222", "name": "mary"}
      ],
      "loading": false,
      "error": true
    },
    "winner": {"id": "333", "name": "dave"},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"}
    ]
  };

  deepFreeze(initialState);

  const newState = {
    "contestantsList": {
      "contestants": [
        {"id": "111", "name": "john"},
        {"id": "222", "name": "mary"}
      ],
      "loading": false,
      "error": true
    },
    "winner": {},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"},
      {"id": "333", "name": "dave"}
    ]
  };

  expect( rootReducer(initialState, saveWinner()) ).toEqual( newState );
});
