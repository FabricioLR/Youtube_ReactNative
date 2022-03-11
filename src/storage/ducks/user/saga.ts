import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { loadSuccessAuthentication, loadFailureAuthentication, loadRequestRegistration, loadFailureRegistration, loadSuccessAuthenticationByToken, loadFailureAuthenticationByToken, loadRequestAuthenticationByToken, loadRequestAuthentication, loadSuccessRegistration } from "./actions"
import { User } from "./types"

interface ResponseData{
    data: User
}

export function* Registration({ payload }: ReturnType<typeof loadRequestRegistration>){
    const { email, password, nome } = payload as any
    try {
        const response: ResponseData = yield call(api.post, "Register", { email, senha: password, nome })

        yield put(loadSuccessRegistration(response.data))
    } catch (error) {
        yield put(loadFailureRegistration())
    }
}

export function* Authentication({ payload }: ReturnType<typeof loadRequestAuthentication>){
    const { email, password } = payload as any
    try {
        const response: ResponseData = yield call(api.post, "Authenticate", { email, senha: password })

        yield put(loadSuccessAuthentication(response.data))
    } catch (error) {
        console.log(error)
        yield put(loadFailureAuthentication())
    }
}

export function* AuthenticationByToken({ payload }: ReturnType<typeof loadRequestAuthenticationByToken>){
    const { token } = payload as any
    try {
        const response: Omit<ResponseData, "user"> = yield call(api.post, "AuthenticateByToken", { token })

        yield put(loadSuccessAuthenticationByToken(response.data))
    } catch (error) {
        yield put(loadFailureAuthenticationByToken())
    }
}
