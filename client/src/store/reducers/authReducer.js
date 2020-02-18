import * as types from '../actions/constants/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.auth, action) {
    switch (action.type) {
        case types.USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case types.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }

        case types.AUTH_ERROR:
        case types.LOGIN_FAIL:
        case types.LOGOUT_SUCCESS:
        case types.REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }

        default:
            return state;
    }

}