import { rejectWinner } from '../redux/actionCreators'
import rootReducer from '../redux/reducers'
import deepFreeze from 'deep-freeze';

it('rejects the current winner', () => {

  const initialState = {
    "contestantsList": {
      "contestants": [
        {"id": "111", "name": "john"},
        {"id": "222", "name": "mary"}
      ],
      "loading": false,
      "error": false
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
        {"id": "222", "name": "mary"},
        {"id": "333", "name": "dave"}
      ],
      "loading": false,
      "error": false
    },
    "winner": {},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"}
    ]
  };

  expect( rootReducer(initialState, rejectWinner()) ).toEqual( newState );
});
