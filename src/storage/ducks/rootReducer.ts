import { combineReducers } from "redux"

import videos from "./videos/index"
import video from "./video/index"
import user from "./user/index"
import historic from "./historic/index"

export default combineReducers({
    videos, user, video, historic
})