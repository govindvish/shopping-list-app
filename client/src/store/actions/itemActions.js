import * as types from './constants/actionTypes';

export const getItems = () => ({
    type: types.GET_ITEMS
});

export const deleteItem = (id) => ({
    type: types.DELETE_ITEM,
    payload: {
        id
    }
});

export const addItem = (item) => ({
    type: types.ADD_ITEM,
    payload: {
        item
    }
});