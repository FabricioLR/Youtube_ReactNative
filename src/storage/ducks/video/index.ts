import { Reducer } from "redux";
import { VideoTypes, VideoState } from "./types"

const INITIAL_STATE: VideoState = {
    data: null
}

const reducer: Reducer<VideoState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case VideoTypes.SAVE_VIDEO:
            return { data: { ...action.payload }}
        case VideoTypes.REMOVE_VIDEO:
            return { data: null }
        default:
            return state
    }
}

export default reducer