import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.list, action) {
    switch (action.type) {
        case types.GET_ITEMS:
            return {
                ...state
            }

        case types.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }

        case types.ADD_ITEM:
            return {
                ...state,
                items: [action.payload.item, ...state.items]
            }

        default:
            return state;
    }
}