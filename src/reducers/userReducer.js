import { userActionTypes } from "../actions/userActions";

const initialState = {
    currentUser: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.LOG_OUT:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }
}