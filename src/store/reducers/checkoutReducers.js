import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS } from "../actions/actionTypes";

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
    case REMOVE_ITEM:
      let newItems = [
        ...state.items.slice(0, action.payload),
        ...state.items.slice(action.payload + 1)
      ];
      return {
        ...state,
        items: newItems
      }
      case REMOVE_ALL_ITEMS:
        return {
          items: []
        }
    default:
      return state;
  }
}
