"use strict";
/**
 * @file defines a unified action type for all the actions used in the FTS Platform
 * This file does not need to be updated if the config file `redux-variables.ts` is properly configured
 * and updated
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
/* ****************************************
* Configure action structure
* ****************************************/
const REQUEST_ITEM = (PARAM) => `REQUEST_${PARAM}`;
const RECIEVE_ITEM = (PARAM) => `RECIEVE_${PARAM}`;
const FAIL_ITEM = (PARAM) => `FAIL_${PARAM}`;
/* ****************************************
 * Action Dictionary
 * ****************************************/
exports.actionDictionary = (reduxVar) => {
    const actions = {};
    Object.keys(reduxVar).map((itemKey) => {
        const unfilteredReduxLayer = reduxVar[itemKey];
        if (!unfilteredReduxLayer) {
            logger_1.Log.error("Wrong configuration settings");
            throw new Error("Wrong configuration settings");
        }
        else if (typeof (unfilteredReduxLayer) === "string") {
            /** this will cast the type to a string type  */
            const reduxLayer = unfilteredReduxLayer.toString();
            actions[reduxLayer] = {
                fail: FAIL_ITEM(reduxLayer),
                recieve: RECIEVE_ITEM(reduxLayer),
                request: REQUEST_ITEM(reduxLayer),
            };
        }
        else {
            if (unfilteredReduxLayer.constructor !== Array) {
                logger_1.Log.error("Wrong configuration settings");
                throw new Error("Wrong configuration settings");
            }
            // Check if the type is not what we are expecting and throw an error
            const reduxLayer = unfilteredReduxLayer;
            reduxLayer.map((layer) => {
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
