import { userActionTypes } from "../actions/userActions";

const initialState = {
    user: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOG_IN:
            return {
                ...state,
                user: action.payload
            }
        case userActionTypes.LOG_OUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}