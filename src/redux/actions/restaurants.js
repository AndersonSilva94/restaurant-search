import { SET_RESTAURANTS, SET_RESTAURANT } from '.';

export const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  payload: restaurants,
});

export const setRestaurant = (restaurant) => ({
  type: SET_RESTAURANT,
  payload: restaurant,
});
