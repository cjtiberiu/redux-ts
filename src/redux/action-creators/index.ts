import axios from 'axios';
import { Dispatch } from 'redux'; // type definition from redux
import { ActionTypes } from '../types';
import { Action } from '../actions';

interface FetchedPackage {
    package: {
        name: string;
        links: {
            npm: string;
        }
    }
}

export const searchRepositories = (searchTerm: string) => {

    return async (dispatch: Dispatch<Action>) => {


        // initiate the initial search action
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES
        });

        try {

            // if search action is successful
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: searchTerm
                }
            });

            const names = data.objects.map((result: FetchedPackage) => {
                return { name: result.package.name, link: result.package.links.npm };
            });

            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCES,
                payload: names
            })

        } catch (err) {

            // if search action gets an error
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            });

        }
    };
}