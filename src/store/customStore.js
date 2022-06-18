import reducer from './reducer';
function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  function dispatch(action) {
    //call the reducer to get the new state
    state = reducer(state, action);
    //notify our subsribers or listeners
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
