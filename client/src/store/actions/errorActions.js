import * as types from './constants/actionTypes';

// Return Errors
export const returnErrors = (msg, status, id = null) => ({
    type: types.GET_ERRORS,
    payload: { msg, status, id }
});

// Clear Errors
export const clearErrors = () => ({
    type: types.CLEAR_ERRORS
});