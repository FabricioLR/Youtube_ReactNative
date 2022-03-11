import { action } from "typesafe-actions";
import { UserTypes, User } from "./types";

type LoadRequestRegistrationProps = {
    email: string
    password: string
    nome: string
}

type LoadRequestAuthenticationProps = {
    email: string
    password: string
}

type LoadRequestAuthenticationByTokenProps = {
    token: string
}

export const loadRequestRegistration = (payload: LoadRequestRegistrationProps) => action(UserTypes.LOAD_REQUEST_REGISTRATION, { payload })
export const loadRequestAuthentication = (payload: LoadRequestAuthenticationProps) => action(UserTypes.LOAD_REQUEST_AUTHENTICATION, { payload })
export const loadRequestAuthenticationByToken = (payload: LoadRequestAuthenticationByTokenProps) => action(UserTypes.LOAD_REQUEST_AUTHENTICATIONBYTOKEN, { payload })

export const loadSuccessRegistration = (data: User) => action(UserTypes.LOAD_SUCCESS_REGISTRATION, { data })
export const loadSuccessAuthentication = (data: User) => action(UserTypes.LOAD_SUCCESS_AUTHENTICATION, { data })
export const loadSuccessAuthenticationByToken = (data: Omit<User, "user">) => action(UserTypes.LOAD_SUCCESS_AUTHENTICATIONBYTOKEN, { data })

export const loadFailureRegistration = () => action(UserTypes.LOAD_FAILURE_REGISTRATION)
export const loadFailureAuthentication = () => action(UserTypes.LOAD_FAILURE_AUTHENTICATION)
export const loadFailureAuthenticationByToken = () => action(UserTypes.LOAD_FAILURE_AUTHENTICATIONBYTOKEN)