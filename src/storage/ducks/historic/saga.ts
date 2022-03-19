import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { loadSuccess, loadFailure, loadRequest, loadFailureAddToHistoric, loadSuccessAddToHistoric, loadRequestAddToHistoric } from "./actions"
import { Historic } from "./types"

interface ResponseData {
    data: Historic[]
}

interface ResponseDataAddToHistoric {
    data: {
        historic: Historic
    }
}

export function* GetHistoric({ payload }: ReturnType<typeof loadRequest>){
    const { userId } = payload as any
    try {
        const response: ResponseData = yield call(api.post, "GetHistoric", { userId })

        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
    }
}

export function* AddToHistoric({ payload }: ReturnType<typeof loadRequestAddToHistoric>){
    const { userId, videoId } = payload as any
    try {
        const response: ResponseDataAddToHistoric = yield call(api.post, "AddToHistoric", { userId, videoId })
        console.log(response.data)
        yield put(loadSuccessAddToHistoric(response.data.historic))
    } catch (error) {
        yield put(loadFailureAddToHistoric())
    }
}


