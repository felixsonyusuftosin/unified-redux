"use strict";
/**
 * @file define generic reducers
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * third party imports
 */
/**
 * Global constants
 */
// initial default state
const initialState = {};
/**
 * @function returns reducers that represents the variables defined in the actionDictionaryConstants
 * @return  { any } - return values
 */
exports.reducerObject = (actionDictionary) => {
    const reducers = {};
    Object.keys(actionDictionary.map((actionKey) => {
        reducers[actionKey] = (state = initialState, action) => {
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
