import { userActionTypes } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    user: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        case userActionTypes.LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state
    }
}