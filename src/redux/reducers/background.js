const backgroundReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_BACKGROUND':
        return action.background;
      default:
        return state;
    }
  };
  
  export default backgroundReducer;
  