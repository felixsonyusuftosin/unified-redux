/**
 * @file define generic reducers
 */
/**
 * Local imports
 */
import { IdispatchParam } from "../../store/actions/actionConfig";
import { IkeyValuePair } from "../../types/index";
export interface IactionType<T> extends IdispatchParam<T> {
    payload: T;
}
/**
 * @function returns reducers that represents the variables defined in the actionDictionaryConstants
 * @return  { any } - return values
 */
export declare const reducerObject: (actionDictionary: IkeyValuePair) => IkeyValuePair;
