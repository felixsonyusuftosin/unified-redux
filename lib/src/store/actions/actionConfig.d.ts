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
/**
 * Global constants
 */
/**
 * Interfaces
 */
export interface IdispatchParam<T> {
    type: string;
    fetching: boolean;
    payload?: T;
}
export interface IactionFunctionType {
    value?: {
        [key: string]: any;
    };
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
export declare const callActionType: (actionDictionaryKey: string, dictionary: IkeyValuePair) => IrequestAction;
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
export declare const dispatchActions: (dictKey: string, eventAction: any, dictionary: IkeyValuePair) => <T>(dispatch: Dispatch<any>) => Promise<false | undefined>;
