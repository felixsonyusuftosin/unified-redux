/**
 * third party imports
 */
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import * as promise from "redux-promise";
import thunk from "redux-thunk";

/**
 * Local imports
 */
import { IkeyValuePair } from "../types/index";
import { reducerObject } from "./reducers/actionConfig.reducers";

/**
 * @function convertToCamelCase  converts  any object fields to camel case
 * @param { object } obj input object that fields needs to  be converted
 * @return { object | string } then pobject returned after fields has being converted to camelcase
 */

export const convertToCamelCase = (obj: IkeyValuePair | string): IkeyValuePair | string => {
    if (typeof (obj) === "object") {
        return humps.camelizeKeys(obj);
    } else {
        return humps.camelize(obj);
    }
};

export const updateReducersObject = (actionDictionary: IkeyValuePair) => {
    const mergedReducers: IkeyValuePair = {};
    const objectDict = reducerObject(actionDictionary);
    Object.keys(objectDict).map((key: string, index: number) => {
        mergedReducers[String(convertToCamelCase(key.toLocaleLowerCase()))] = objectDict[key];
    });
    return mergedReducers;
};

const allReducers: any = (actionDictionary: IkeyValuePair) => combineReducers({
    ...updateReducersObject(actionDictionary),
});

const middlewares = [thunk, promise] as any[];
middlewares.push(logger);

const store = (actionDictionary: IkeyValuePair = {}) => {
    createStore(
        allReducers(actionDictionary), applyMiddleware(...middlewares),
    );
};

export default store;
