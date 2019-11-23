import { ADD_ITEM } from "../actions/actionTypes";

const initialState = {
  items: []
};

// Cart State
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        // add onto the array the new item
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}
