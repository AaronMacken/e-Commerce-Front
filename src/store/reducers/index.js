// root reducer file
import { combineReducers } from "redux";
import checkoutReducers from './checkoutReducers'

const rootReducer = combineReducers({
    checkoutReducers
});

export default rootReducer;
