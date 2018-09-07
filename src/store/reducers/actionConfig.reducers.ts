
/**
 * @file define generic reducers
 */

/**
 * Local imports
 */

import { IkeyValuePair } from "../../types/index";
import { IdispatchParam } from "../actions/actionConfig";

/**
 * third party imports
 */

/**
 * Global constants
 */

// initial default state
const initialState = {};

export interface IactionType<T> extends IdispatchParam<T> {
    payload: T;
}

/**
 * @function returns reducers that represents the variables defined in the actionDictionaryConstants
 * @return  { any } - return values
 */
export const reducerObject = (actionDictionary: IkeyValuePair) => {
    const reducers: IkeyValuePair = {};
    Object.keys(actionDictionary.map((actionKey: string) => {
        reducers[actionKey] = (state = initialState, action: IactionType<{}>) => {
            switch (action.type) {
                case actionDictionary[actionKey].request:
                    {
                        return Object.assign(state, { error: false, pending: true });
                    }
                case actionDictionary[actionKey].recieve:
                    {
                        return Object.assign(state, { error: false, payload: action.payload, pending: false });
                    }
                case actionDictionary[actionKey].fail:
                    {
                        return Object.assign(state, { error: action.payload, payload: null, pending: false });
                    }
                default:
                    return state;
            }
        };
    }));
    return reducers;
};
