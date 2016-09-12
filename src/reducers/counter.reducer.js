import * as Types from '../constants/actionTypes';
export function counter(state = {counter:0}, action){
  switch (action.type) {
    case Types.COUNTER_INCREASE:
      return {...state,counter:state.counter+1};
    case Types.COUNTER_DECREASE:
      return {...state,counter:state.counter-1};
    default:
      return state;
  }
}
