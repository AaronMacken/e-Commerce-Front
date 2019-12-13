import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: []
};

// Cart State
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      // helper function, returns bool. See if id exists in array
      function doesExist(array, id) {
        for (let i = 0; i < array.length; i++) {
          if (array[i].id === id) {
            return true
          }
        }
        return false
      }

      let newStateArray = [...state.items];

      // if element is not in the array, add the new item
      if (doesExist(newStateArray, action.payload.id) === false) {
        newStateArray.push(action.payload);
        return {
          ...state,
          items: newStateArray
        }
      } else {
        // otherwise, find and replace that array element
        let pos = newStateArray.map(function (e) { return e.id; }).indexOf(action.payload.id);
        newStateArray[pos] = action.payload
        return {
          ...state,
          items: newStateArray
        }
      }
    // console.log(newStateArray);
    // return {
    //   ...state, 
    //   items: newStateArray
    // }


    // return {
    //   ...state,
    //   // add onto the array the new item
    //   items: [...state.items, action.payload]
    // };

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
