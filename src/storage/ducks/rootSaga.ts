import { all, takeLatest } from "redux-saga/effects"
import { VideosTypes } from "./videos/types"
import { GetVideos, UpdateVisualization } from "./videos/saga"
import { UserTypes } from "./user/types"
import { Authentication, AuthenticationByToken, Registration } from "./user/saga"
import { HistoricTypes } from "./historic/types"
import { GetHistoric } from "./historic/saga"

export default function* rootSaga(){
    yield all([
        takeLatest(VideosTypes.LOAD_REQUEST, GetVideos),
        takeLatest(VideosTypes.LOAD_UPDATE_VISUALIZATIONS, UpdateVisualization),
        takeLatest(UserTypes.LOAD_REQUEST_AUTHENTICATION, Authentication),
        takeLatest(UserTypes.LOAD_REQUEST_REGISTRATION, Registration),
        takeLatest(UserTypes.LOAD_REQUEST_AUTHENTICATIONBYTOKEN, AuthenticationByToken),
        takeLatest(HistoricTypes.LOAD_REQUEST, GetHistoric)
    ])
}