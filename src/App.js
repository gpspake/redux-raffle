import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import chooseWinner from './redux/actionCreators'
import Raffle from './containers/RaffleContainer'

const App = React.createClass({
  handleClick() {
    store.dispatch(chooseWinner(1));
  },
  render() {
    return (
      <Provider store={store}>
        <Raffle />
      </Provider>
    );
  }
});

export default App;
