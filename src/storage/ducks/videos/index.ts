import { Reducer } from "redux";
import { VideosState, VideosTypes } from "./types";

const INITIAL_STATE: VideosState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<VideosState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case VideosTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case VideosTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        case VideosTypes.LOAD_UPDATE_VISUALIZATIONS:
            return { ...state, loading: true }
        case VideosTypes.LOAD_SUCCESS_UPDATE_VISUALIZATIONS:
            const videoV = state.data.filter((video, i) => (video.id === action.payload.data))[0]
            videoV.visualizacoes = videoV.visualizacoes + 1
            const video = state.data.map((video, i) => (video.id === action.payload.data ? videoV : video))
            return { ...state, loading: false, error: false, data: video}
        case VideosTypes.LOAD_FAILURE_UPDATE_VISUALIZATIONS:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer