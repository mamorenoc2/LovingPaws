// mascotasReducer.js

const initialState = {
    pets: [],
  };
  
  const mascotasReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_PETS':
        return {
          ...state,
          pets: action.payload,
        };
  
      case 'DELETE_PET':
        return {
          ...state,
          pets: state.pets.filter((pet) => pet.id !== action.payload),
        };
  
      // Otros casos según sea necesario
  
      default:
        return state;
    }
  };
  
  export default mascotasReducer;
  