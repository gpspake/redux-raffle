import { chooseWinner } from '../redux/actionCreators'
import rootReducer from '../redux/reducers'
import deepFreeze from 'deep-freeze';

it('chooses a winner', () => {

  const initialState = {
    "contestantsList": {
      "contestants": [
        {"id": "111", "name": "john"},
        {"id": "222", "name": "mary"},
        {"id": "333", "name": "dave"}
      ],
      "loading": false,
      "error": true
    },
    "winner": {},
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
        {"id": "333", "name": "dave"}
      ],
      "loading": false,
      "error": true
    },
    "winner": {"id": "222", "name": "mary"},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"}
    ]
  };

  expect( rootReducer(initialState, chooseWinner(1)) ).toEqual( newState );
});
