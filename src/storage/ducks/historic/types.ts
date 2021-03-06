export enum HistoricTypes {
    "LOAD_REQUEST" = "@historic/LOAD_REQUEST",
    "LOAD_FAILURE" = "@historic/LOAD_FAILURE",
    "LOAD_SUCCESS" = "@historic/LOAD_SUCCESS",

    "ADD_TO_HISTORIC_WL" = "@historic/ADD_TO_HISTORIC_WL",
    "ADD_TO_HISTORIC_WL_SUCCESS" = "@historic/ADD_TO_HISTORIC_WL_SUCCESS",
    "ADD_TO_HISTORIC_WL_FAILURE" = "@historic/ADD_TO_HISTORIC_WL_FAILURE",

    "ADD_TO_HISTORIC_WTL" = "@historic/ADD_TO_HISTORIC_WTL",
}

export interface Historic {
    id: number
    url: string
    nome: string
    user: {
        nome: string
        foto_url: string
    }
    visualizacoes: number
}

export interface HistoricState {
    readonly data: Historic[]
    readonly loading: boolean
    readonly error: boolean
}