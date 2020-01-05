// root reducer file
import { combineReducers } from "redux";
import checkoutReducers from './checkoutReducers';
import items from './itemsReducer';

const rootReducer = combineReducers({
    checkoutItems: checkoutReducers,
    items
});

export default rootReducer;
