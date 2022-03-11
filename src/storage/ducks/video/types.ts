export enum VideoTypes {
    "SAVE_VIDEO" = "@video/SAVE_VIDEO",
    "REMOVE_VIDEO" = "@video/REMOVE_VIDEO"
}

export interface Video {
    nome: string
    url: string
    position: number
    users: {
        nome: string
    }
}

export interface VideoState {
    readonly data: Video | null
}