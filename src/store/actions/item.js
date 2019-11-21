import { ADD_ITEM } from "./actionTypes";

export function addItem(itemData) {
    return {
        type: ADD_ITEM,
        payload: itemData
    }
}