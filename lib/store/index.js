"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * third party imports
 */
const redux_1 = require("redux");
const redux_logger_1 = __importDefault(require("redux-logger"));
const promise = __importStar(require("redux-promise"));
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const actionConfig_reducers_1 = require("./reducers/actionConfig.reducers");
/**
 * @function convertToCamelCase  converts  any object fields to camel case
 * @param { object } obj input object that fields needs to  be converted
 * @return { object | string } then pobject returned after fields has being converted to camelcase
 */
exports.convertToCamelCase = (obj) => {
    if (typeof (obj) === "object") {
        return humps.camelizeKeys(obj);
    }
    else {
        return humps.camelize(obj);
    }
};
exports.updateReducersObject = (actionDictionary) => {
    const mergedReducers = {};
    const objectDict = actionConfig_reducers_1.reducerObject(actionDictionary);
    Object.keys(objectDict).map((key, index) => {
        mergedReducers[String(exports.convertToCamelCase(key.toLocaleLowerCase()))] = objectDict[key];
    });
    return mergedReducers;
};
const allReducers = (actionDictionary) => redux_1.combineReducers({
    ...exports.updateReducersObject(actionDictionary),
});
const middlewares = [redux_thunk_1.default, promise];
middlewares.push(redux_logger_1.default);
const store = (actionDictionary = {}) => {
    redux_1.createStore(allReducers(actionDictionary), redux_1.applyMiddleware(...middlewares));
};
exports.default = store;
