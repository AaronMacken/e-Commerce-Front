import { LOAD_ITEMS } from '../actions/actionTypes';

export const items = (state = [], action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return [...action.items];
    default:
      return state;
  }
};

export default items;