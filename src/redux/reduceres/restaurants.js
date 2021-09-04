import { SET_RESTAURANTS, SET_RESTAURANT } from '../actions';

const INITIAL_STATE = {
  restaurants: [],
  restaurantSelected: null,
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case SET_RESTAURANT:
      return { ...state, restaurantSelected: action.payload };
    default:
      return state;
  }
};

export default restaurantReducer;
