import React, { Component } from 'react';
import configureStore from './store/createStore';
import {Provider,connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterAction from './actions/counterAction';
import './app.scss';
const store = configureStore();

@connect(
  (state)=>({ ...state.counter}),
  (dispatch)=>({ actions: bindActionCreators(counterAction,dispatch)})
)
class TestStore extends Component{

  handleIncreaseClick(){
    this.props.actions.increase();
  }

  handleDecreaseClick(){
      this.props.actions.decrease();
  }

  handleFetchClick(){
    this.props.actions.getData();
  }

  render(){
    return (
      <div>
        <h2>Counter 6</h2>
        <p>{this.props.counter}</p>
        <button onClick={this.handleIncreaseClick.bind(this)}>Increase</button>
        <button onClick={this.handleDecreaseClick.bind(this)}>Decrease</button>
        <button onClick={this.handleFetchClick.bind(this)}>Fetch</button>
      </div>
    );
  }

}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TestStore/>
        </div>
      </Provider>
    );
  }
}


export default App;
