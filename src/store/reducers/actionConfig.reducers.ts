
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
                        return {
                            ...state,
                            error: false,
                            pending: true,
                        };
                    }
                case actionDictionary[actionKey].recieve:
                    {
                        return {
                            ...state,
                            error: false,
                            payload: action.payload,
                            pending: false,
                        };
                    }
                case actionDictionary[actionKey].fail:
                    {
                        return {
                            ...state,
                            error: action.payload,
                            payload: null,
                            pending: false,
                        };
                    }
                default:
                    return state;
            }
        };
    }));
    return reducers;
};
