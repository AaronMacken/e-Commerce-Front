import { ADD_ITEM, REMOVE_ITEM} from "./actionTypes";

export function addItem(itemData) {
    return {
        type: ADD_ITEM,
        payload: itemData
    }
}

export function removeItem(itemId) {
    return {
        type: REMOVE_ITEM,
        payload: itemId
    }
}