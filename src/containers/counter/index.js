import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterAction from '../../actions/counterAction';

@connect(
  (state)=>({ ...state.counter}),
  (dispatch)=>({ actions: bindActionCreators(counterAction,dispatch)})
)
export default class Counter extends React.Component{

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
        <h2>Counter 5 {this.props.title}</h2>
        <p>{this.props.counter}</p>
        <button onClick={this.handleIncreaseClick.bind(this)}>Increase</button>
        <button onClick={this.handleDecreaseClick.bind(this)}>Decrease</button>
        <button onClick={this.handleFetchClick.bind(this)}>Fetch</button>
      </div>
    );
  }

}
