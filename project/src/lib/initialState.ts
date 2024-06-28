import { IState, Filters } from "./types";

export const initialState:IState = {
    todos:[],
    currentFilters: Filters.all
}
