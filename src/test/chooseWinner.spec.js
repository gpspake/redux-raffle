import { chooseWinner } from '../redux/actionCreators'
import rootReducer from '../redux/reducers'
import deepFreeze from 'deep-freeze';

it('accepts the current winner', () => {

  const initialState = {
    "contestants": [
      {"id": "111", "name": "john"},
      {"id": "222", "name": "mary"},
      {"id": "333", "name": "dave"}
    ],
    "winner": {},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"}
    ]
  };

  deepFreeze(initialState);

  const newState = {
    "contestants": [
      {"id": "111", "name": "john"},
      {"id": "333", "name": "dave"}
    ],
    "winner": {"id": "222", "name": "mary"},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"}
    ]
  };

  expect( rootReducer(initialState, chooseWinner(1)) ).toEqual( newState );
});
