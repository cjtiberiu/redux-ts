import { ActionTypes } from '../types';
import { Action } from '../actions';

interface FetchedData {
    name: string;
    link: string;
}

// set the interface for the state
interface RepositoriesState {
    data: FetchedData[];
    loading: boolean;
    error: string | null;
}

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: []
}

const respositoriesReducer = (state: RepositoriesState = INITIAL_STATE, action: Action): RepositoriesState => {
    switch(action.type) {
        case ActionTypes.SEARCH_REPOSITORIES:
            return {
                loading: true,
                error: null,
                data: []
            }
        case ActionTypes.SEARCH_REPOSITORIES_SUCCES:
            return {
                loading: false,
                error: null,
                data: action.payload
            }
        case ActionTypes.SEARCH_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state;
    }
};

export default respositoriesReducer;