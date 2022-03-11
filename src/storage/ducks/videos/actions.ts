import { action } from "typesafe-actions";
import { VideosTypes, Video } from "./types";

export const loadRequest = () => action(VideosTypes.LOAD_REQUEST)
export const loadSuccess = (data: Video[]) => action(VideosTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(VideosTypes.LOAD_FAILURE)

type LoadUpdateVisualizationProps = {
    videoId: number
}

export const loadUpdateVisualization = (payload: LoadUpdateVisualizationProps) => action(VideosTypes.LOAD_UPDATE_VISUALIZATIONS, { payload })
export const loadSuccessUpdateVisualization = (data: number) => action(VideosTypes.LOAD_SUCCESS_UPDATE_VISUALIZATIONS, { data })
export const loadFailureUpdateVisualization = () => action(VideosTypes.LOAD_FAILURE_UPDATE_VISUALIZATIONS)