import { action } from "typesafe-actions";
import { HistoricTypes, Historic } from "./types";

type LoadRequest = {
    id: string
}

type LoadRequestAddToHistoric = {
    userId: number
    videoId: number
}

export const loadRequest = (payload: LoadRequest) => action(HistoricTypes.LOAD_REQUEST, { payload })
export const loadRequestAddToHistoric = (payload: LoadRequestAddToHistoric) => action(HistoricTypes.ADD_TO_HISTORIC_WL, { payload })

export const loadSuccess = (data: Historic[]) => action(HistoricTypes.LOAD_SUCCESS, { data })
export const loadSuccessAddToHistoric = (data: Historic) => action(HistoricTypes.ADD_TO_HISTORIC_WL_SUCCESS, { data })

export const loadFailure = () => action(HistoricTypes.LOAD_FAILURE)
export const loadFailureAddToHistoric = () => action(HistoricTypes.ADD_TO_HISTORIC_WL_FAILURE)