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
import { Log } from "../../utils/logger";

/* ****************************************
* Configure action structure
* ****************************************/
const REQUEST_ITEM = (PARAM: string) => `REQUEST_${PARAM}`;
const RECIEVE_ITEM = (PARAM: string) => `RECIEVE_${PARAM}`;
const FAIL_ITEM = (PARAM: string) => `FAIL_${PARAM}`;

/**
 * @interface defination for actions
 * all actions will have three possible sub fields
 */
export interface IactionDict {
    [key: string]: {
        request: string,
        recieve: string,
        fail: string,
    };
}
/* ****************************************
 * Action Dictionary
 * ****************************************/
export const actionDictionary = (reduxVar: IkeyValuePair ): IactionDict => {
    const actions: IactionDict = {};
    Object.keys(reduxVar).map((itemKey: string) => {
        const unfilteredReduxLayer = reduxVar[itemKey];
        if (!unfilteredReduxLayer) {
            Log.error("Wrong configuration settings");
            throw new Error("Wrong configuration settings");
        } else if (typeof (unfilteredReduxLayer) === "string") {
            /** this will cast the type to a string type  */
            const reduxLayer = unfilteredReduxLayer.toString();
            actions[reduxLayer] = {
                fail: FAIL_ITEM(reduxLayer),
                recieve: RECIEVE_ITEM(reduxLayer),
                request: REQUEST_ITEM(reduxLayer),
            };
        } else {
            if (
                unfilteredReduxLayer.constructor !== Array) {
                Log.error("Wrong configuration settings");
                throw new Error("Wrong configuration settings");
            }
            // Check if the type is not what we are expecting and throw an error
            const reduxLayer: string[] = unfilteredReduxLayer as string[];
            reduxLayer.map((layer: string) => {
                actions[layer] = {
                    fail: FAIL_ITEM(layer),
                    recieve: RECIEVE_ITEM(layer),
                    request: REQUEST_ITEM(layer),
                };
            });

        }
    });
    return actions;
};
