import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.list, action) {
    switch (action.type) {
        case types.GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case types.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case types.ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case types.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}