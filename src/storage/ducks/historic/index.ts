import { Reducer } from "redux";
import { HistoricTypes, HistoricState } from "./types";

const INITIAL_STATE: HistoricState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<HistoricState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case HistoricTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case HistoricTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: [ ...action.payload.data ] }
        case HistoricTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        case HistoricTypes.ADD_TO_HISTORIC_WTL:
            return { ...state, data: [ ...state.data, { id: action.payload.id, url: action.payload.url, nome: action.payload.nome, user: { nome: action.payload.user.nome, foto_url: action.payload.user.foto_url }, visualizacoes: action.payload.visualizacoes }]}
        case HistoricTypes.ADD_TO_HISTORIC_WL:
            return { ...state, loading: true}
        case HistoricTypes.ADD_TO_HISTORIC_WL_SUCCESS:
          //  return { ...state, loading: false, data: [ ...state.data, { id: action.payload.id, url: action.payload.url, nome: action.payload.nome, user: { nome: action.payload.user.nome } }] }
        case HistoricTypes.ADD_TO_HISTORIC_WL_FAILURE:
            return { ...state, data: [ ...state.data ], error: true, loading: false }
        default:
            return state
    }
}

export default reducer