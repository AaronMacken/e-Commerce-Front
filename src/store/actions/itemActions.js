import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS } from "./actionTypes";

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

export function removeAllItems() {
    return {
        type: REMOVE_ALL_ITEMS
    }
}