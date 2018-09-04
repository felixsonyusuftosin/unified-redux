/**
 * @file define generic reducers
 */
/**
 * Local imports
 */
import { IkeyValuePair } from "../../types";
import { IdispatchParam } from "../actions/actionConfig";
export interface IactionType<T> extends IdispatchParam<T> {
    payload: T;
}
/**
 * @function returns reducers that represents the variables defined in the actionDictionaryConstants
 * @return  { any } - return values
 */
export declare const reducerObject: (actionDictionary: IkeyValuePair) => IkeyValuePair;
