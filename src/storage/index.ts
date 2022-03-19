import { createStore, Store, applyMiddleware } from "redux";
import { VideosState } from "./ducks/videos/types";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { UserState } from "./ducks/user/types";
import { VideoState } from "./ducks/video/types";
import { HistoricState } from "./ducks/historic/types";

export interface ApplicationState{
    videos: VideosState
    user: UserState
    video: VideoState
    historic: HistoricState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store