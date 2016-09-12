import React, { Component } from 'react';
import configureStore from './store/createStore';
import {Provider} from 'react-redux';
import Counter from './containers/counter';
import './app.scss';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}


export default App;
