import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { loadSuccess, loadFailure, loadSuccessUpdateVisualization, loadFailureUpdateVisualization, loadUpdateVisualization } from "./actions"
import { Video } from "./types"

interface ResponseData{
    data: {
        videos: Video[]
    }
}

export function* GetVideos(){
    try {
        const response: ResponseData = yield call(api.get, "GetVideos")

        yield put(loadSuccess(response.data.videos))
    } catch (error) {
        console.log(error)
        yield put(loadFailure())
    }
}

export function* UpdateVisualization({ payload }: ReturnType<typeof loadUpdateVisualization>){
    const { videoId } = payload as any
    try {
        const response: boolean = yield call(api.put, "UpdateVisualizations", {
            videoId
        })

        if (!response) yield put(loadFailureUpdateVisualization())

        yield put(loadSuccessUpdateVisualization(Number(videoId)))
    } catch (error) {
        yield put(loadFailureUpdateVisualization())
    }
}
