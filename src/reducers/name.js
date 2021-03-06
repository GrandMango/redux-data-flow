const reducers = (state = 'Default', action) => {
  if (action.type === 'SET_USER') {
    console.log('Reducer: ' + action.payload);
    return Object.assign({}, state, {
      user: action.payload
    });
  }
  return state;
};

export default reducers;
