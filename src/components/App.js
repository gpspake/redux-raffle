import React from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Raffle from '../containers/RaffleContainer'

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <Raffle />
      </Provider>
    );
  }
});

export default App;
