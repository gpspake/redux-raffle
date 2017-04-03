import { updateContestants } from '../redux/actionCreators'
import rootReducer from '../redux/reducers'
import deepFreeze from 'deep-freeze';

it('updates contestants with current winner', () => {

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

  const newContestants = [
    {"id": "111", "name": "john"},
    {"id": "222", "name": "mary"},
    {"id": "333", "name": "dave"},
    {"id": "444", "name": "joan"},
    {"id": "555", "name": "jake"},
    {"id": "666", "name": "gary"},
    {"id": "777", "name": "tina"}
  ]

  deepFreeze(initialState);
  deepFreeze(newContestants);

  const newState = {
    "contestants": [
      {"id": "111", "name": "john"},
      {"id": "222", "name": "mary"},
      {"id": "333", "name": "dave"},
      {"id": "666", "name": "gary"},
      {"id": "777", "name": "tina"}
    ],
    "winner": {},
    "winners": [
      {"id": "444", "name": "joan"},
      {"id": "555", "name": "jake"}
    ]
  };

  expect( rootReducer(initialState, updateContestants(newContestants)) ).toEqual( newState );
});
