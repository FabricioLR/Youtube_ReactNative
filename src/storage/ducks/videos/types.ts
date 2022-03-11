export enum VideosTypes {
    "LOAD_REQUEST" = "@videos/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@videos/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@videos/LOAD_FAILURE",

    "LOAD_UPDATE_VISUALIZATIONS" = "@video/LOAD_UPDATE_VISUALIZATIONS",
    "LOAD_SUCCESS_UPDATE_VISUALIZATIONS" = "@video/LOAD_SUCCESS_UPDATE_VISUALIZATIONS",
    "LOAD_FAILURE_UPDATE_VISUALIZATIONS" = "@video/LOAD_FAILURE_UPDATE_VISUALIZATIONS"
}

export interface Video {
    id: number
    nome: string
    url: string
    visualizacoes: number
    users: {
        nome: string
        foto_url: string
    }
}

export interface VideosState {
    readonly data: Video[]
    readonly loading: boolean
    readonly error: boolean
}