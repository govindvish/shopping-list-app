import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.error, action) {
    switch (action.type) {
        case types.GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }

        case types.CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            }

        default:
            return state;
    }
}