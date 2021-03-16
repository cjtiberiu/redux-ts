import { ActionTypes } from '../types';

interface FetchedData {
    name: string;
    link: string;
}

// define interface for different action types
interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccesAction {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCES;
    payload: FetchedData[];
}

interface SearchRepositoriesErrorAction {
    type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

// join all the action interfaces for use in the reducer
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccesAction | SearchRepositoriesErrorAction;
