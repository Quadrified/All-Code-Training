import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStore} from 'redux';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
    case 'CLEAR_COUNTER':
      return {counter: 0};
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, {Component} from 'react';
// import LoginAppNavigators from './src/navigators/LoginAppNavigators';
// // import LoginAsyncStorage from './src/Screens/LoginScreens/LoginAsyncStorage';
// class App extends Component {
//   render() {
//     return <LoginAppNavigators />;
//   }
// }
// export default App;
