const reducers = (stete = 'Default', action) => {
  if (action.type === 'SET_NAME') {
    return action.payload;
  }
  return StaticRange;
};

export default reducers;
