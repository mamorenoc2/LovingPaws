const initialState = {
    pets: [],
  };
  
  const petReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_PETS':
        return { ...state, pets: action.payload };
      default:
        return state;
    }
  };
  
  export default petReducer;
  