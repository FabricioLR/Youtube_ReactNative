export enum UserTypes {
    "LOAD_REQUEST_REGISTRATION" = "@user/LOAD_REQUEST_REGISTRATION",
    "LOAD_REQUEST_AUTHENTICATION" = "@user/LOAD_REQUEST_AUTHENTICATION",
    "LOAD_SUCCESS_REGISTRATION" = "@user/LOAD_SUCCESS_REGISTRATION",
    "LOAD_FAILURE_REGISTRATION" = "@user/LOAD_FAILURE_REGISTRATION",
    "LOAD_SUCCESS_AUTHENTICATION" = "@user/LOAD_SUCCESS_AUTHENTICATION",
    "LOAD_FAILURE_AUTHENTICATION" = "@user/LOAD_FAILURE_AUTHENTICATION",
    "LOAD_REQUEST_AUTHENTICATIONBYTOKEN" = "@user/LOAD_REQUEST_AUTHENTICATIONBYTOKEN",
    "LOAD_SUCCESS_AUTHENTICATIONBYTOKEN" = "@user/LOAD_SUCCESS_AUTHENTICATIONBYTOKEN",
    "LOAD_FAILURE_AUTHENTICATIONBYTOKEN" = "@user/LOAD_FAILURE_AUTHENTICATIONBYTOKEN",

    "REMOVE_USER" = "@user/REMOVE_USER",
}

export interface User {
    token: string
    user: {
        nome: string
        foto_url: string
        id: number
    }
}

export interface UserState {
    readonly data: User | null
    readonly loading: boolean
    readonly error: boolean
}