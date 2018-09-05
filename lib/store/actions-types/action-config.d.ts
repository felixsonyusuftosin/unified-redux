/**
 * @file defines a unified action type for all the actions used in the FTS Platform
 * This file does not need to be updated if the config file `redux-variables.ts` is properly configured
 * and updated
 */
/**
 * third party imports
 *  NA
 */
/**
 * Local imports
 */
import { IkeyValuePair } from "../../types/index";
/**
 * @interface defination for actions
 * all actions will have three possible sub fields
 */
export interface IactionDict {
    [key: string]: {
        request: string;
        recieve: string;
        fail: string;
    };
}
export declare const actionDictionary: (reduxVar: IkeyValuePair) => IactionDict;
