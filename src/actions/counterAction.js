
import * as Types from '../constants/actionTypes';
import { CALL_API } from 'redux-api-middleware';

export const increase = () => ({
  type:Types.COUNTER_INCREASE
});


export const decrease = ()=>({
  type:Types.COUNTER_DECREASE
});


export const getData = ()=>({
  [CALL_API]: {
      endpoint: 'http://localhost:3001/api/test',
      method: 'GET',
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
  }
});
