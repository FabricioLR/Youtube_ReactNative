import { Reducer } from "redux";
import { UserTypes, UserState } from "./types";

const INITIAL_STATE: UserState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UserTypes.LOAD_REQUEST_AUTHENTICATION:
            return { ...state, loading: true }
        case UserTypes.LOAD_SUCCESS_AUTHENTICATION:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case UserTypes.LOAD_FAILURE_AUTHENTICATION:
            return { ...state, loading: false, error: true, data: null }
        case UserTypes.LOAD_REQUEST_REGISTRATION:
            return { ...state, loading: true }
        case UserTypes.LOAD_SUCCESS_REGISTRATION:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case UserTypes.LOAD_FAILURE_REGISTRATION:
            return { ...state, loading: false, error: true, data: null }
        case UserTypes.LOAD_REQUEST_AUTHENTICATIONBYTOKEN:
            return { ...state, loading: true }
        case UserTypes.LOAD_SUCCESS_AUTHENTICATIONBYTOKEN:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case UserTypes.LOAD_FAILURE_AUTHENTICATIONBYTOKEN:
            return { ...state, loading: false, error: true, data: null }
        case UserTypes.REMOVE_USER:
            return { ...state, loading: false, error: true, data: null }
        default:
            return state
    }
}

export default reducer