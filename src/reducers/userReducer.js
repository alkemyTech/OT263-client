import { userActionTypes } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    currentUser: {}
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload
            }
        case userActionTypes.LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                currentUser: {}
            }
        default:
            return state
    }
}