/**
 * Local imports
 */
import { IkeyValuePair } from "../types/index";
/**
 * @function convertToCamelCase  converts  any object fields to camel case
 * @param { object } obj input object that fields needs to  be converted
 * @return { object | string } then pobject returned after fields has being converted to camelcase
 */
export declare const convertToCamelCase: (obj: string | IkeyValuePair) => string | IkeyValuePair;
export declare const updateReducersObject: (actionDictionary: IkeyValuePair) => IkeyValuePair;
declare const store: (actionDictionary?: IkeyValuePair) => void;
export default store;
