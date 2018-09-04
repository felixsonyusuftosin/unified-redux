/**
 * @file this file implements a generic action creator for the FTS Product
 * This file will typically not require updates or edits unless it for maintainance reasons
 * It unifies all action creators that will be called on the FTS platform and exposes an util function for this
 */

/**
 * third party imports
 */
import { Dispatch } from "redux";

/**
 * Local Imports
 */
import { IkeyValuePair } from "../../types";
import { actionDictionary } from "../actions-types/action-config";

/**
 * Global constants
 */

/**
 * Interfaces
 */

export interface IdispatchParam<T> {
    type: string;
    fetching: boolean;
    payload?: T; // Payload is dependent on the value passed
}
export interface IactionFunctionType {
    value?: { [key: string]: any };
    func?<T>(param?: T): T;
}

export interface IrequestAction {
    request(): IdispatchParam<{}>;
    recieve<T>(data: T): IdispatchParam<T>;
    fail<T>(error: T): IdispatchParam<T>;
}

/**
 * @function dispatch the appropriate action type , loads the actionDictionary
 * and maps the param with the appropriate dictionary value
 * @param { string } - actionDictionaryKey
 */
export const callActionType = (actionDictionaryKey: string, dictionary: IkeyValuePair): IrequestAction => {
    // Get reference to the appropriate action type
    const actionSet = actionDictionary(dictionary)[actionDictionaryKey];
    if (!actionSet) {
        throw new Error
            (`The dictKey ${actionDictionaryKey} does not match any parameter of the actionDictionary object `);
    }
    // return appropriate action types
    const returnSet: IrequestAction = {
        request() {
            return {
                fetching: true,
                payload: {},
                type: actionSet.request,
            };
        },
        recieve<T>(data: T) {
            return {
                fetching: true,
                payload: data,
                type: actionSet.recieve,
            };
        },
        fail<T>(error: T) {
            return {
                fetching: true,
                payload: error,
                type: actionSet.fail,

            };
        },
    };
    return returnSet;
};

/**
 * @function a generic action creator that calls the appropriate actions as requires
 * @param { string } dictKey - the actionDictionary key that is being called
 * @param { ActionFunctionType } the parameter passed could either
 * be a function or an object
 * @param { dictionary } - the dictionary representing key value of redux variables
 * ****************************************
 *  This function updates the store and calls the appropriate
 * reducer, it will handle all action creators on the FTS APP
 * ***************************************
 */
export const dispatchActions = (dictKey: string, eventAction: any, dictionary: IkeyValuePair) => {
    const actions: IrequestAction = callActionType(dictKey, dictionary);
    return async<T>(dispatch: Dispatch<any>) => {
        dispatch(actions.request());
        const { func, value } = eventAction;
        if (!func && !value || !dictKey) {
            dispatch(actions.fail("Sorry you didnt provide the full parameters required for loading this action"));
            return false;
        } else {
            // Check if eventAction type
            if (func) {
                // Run block if func is promiselike
                try {
                    func()
                        .then((resolved: any) => {
                            try {
                                resolved.json().then((data: IkeyValuePair) => {
                                    // console.log(data, ' resolved data from the server');
                                    dispatch(actions.recieve(data));
                                })
                                    .catch((err: string) => dispatch(actions.recieve(resolved)));
                            } catch (err) {
                                dispatch(actions.recieve(resolved));
                            }
                            return;
                        },
                    )
                        .catch((err: string) => {
                            dispatch(actions.fail(err));
                            return;
                        },
                    );

                } catch (err) {
                    // func is no promiselike
                    try {
                        dispatch(actions.recieve(func()));
                        return;
                    } catch (err) {
                        dispatch(actions.fail(err));
                        return;
                    }
                }
            } else {
                dispatch(actions.recieve(value));
                return;
            }
            return;
        }
    };
};
