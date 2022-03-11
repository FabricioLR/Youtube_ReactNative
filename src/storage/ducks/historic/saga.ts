import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { loadSuccess, loadFailure, loadRequest } from "./actions"
import { Historic } from "./types"

interface ResponseData{
    data: Historic[]
}

export function* GetHistoric({ payload }: ReturnType<typeof loadRequest>){
    const { email, password, nome } = payload as any
    try {
        const response: ResponseData = yield call(api.post, "Register", { email, senha: password, nome })

        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
    }
}


