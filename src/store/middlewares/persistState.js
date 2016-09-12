import persistState from 'redux-localstorage';

export default persistState(void 0,{
  slicer:(paths)=>(state)=>{
    return {
      counter:state.counter.counter
    };
  },
  merge:(initialState,persistState)=>{
    if(!persistState) return initialState;
    return {
      counter:persistState
    };
  }
});
