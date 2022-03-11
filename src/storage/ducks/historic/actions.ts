import { action } from "typesafe-actions";
import { HistoricTypes, Historic } from "./types";

type LoadRequest = {
    id: string
}

export const loadRequest = (payload: LoadRequest) => action(HistoricTypes.LOAD_REQUEST, { payload })

export const loadSuccess = (data: Historic[]) => action(HistoricTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(HistoricTypes.LOAD_FAILURE)