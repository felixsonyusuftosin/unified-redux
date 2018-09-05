/**
 * @file type definitions (interfaces will be defined here )
 */
/**
 * Interface delcaration for dictionary types
 * Dictionary represents all the actions that you intend to call
 * on your applications action dictionariy keys are strings
 * that represent what the store will name the actions
 * and values could be string for monoaction items
 * and an array for multi action types
 */
export interface IactionDictionary {
    [Key: string]: string | string[];
}
/**
 * Interface  declaration for event action
 * passed to the action class
 */
export interface IeventAction {
    func: any;
    value: any;
}
/**¸
 * Key value pair default type for objects
 */
export interface IkeyValuePair {
    [key: string]: any;
}
