/**
 * @file file that defines entry point into the module
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
/**
 * third party imports
 */
/**
 * Interface declarations
 */
interface IunifiedStore {
    store: any;
    dispatchActions?(dictKey: string, eventAction: IeventAction): any;
    createReduxStoreObject(): void;
}
interface IconstructorProps {
    dictionary: IactionDictionary;
}
/**
 * Global constants
 */
export default class UnifiedRedux implements IunifiedStore {
    actionDictionary: IactionDictionary;
    store: any;
    /**
     * @method constructor def
     * @param { IconstructorProps } - props
     */
    constructor(props: IconstructorProps);
    /**
     * public  dispatchActions
     * dispatches actions as an action creator
     * @return dispatchAction function calls with the right param
     */
    dispatchActions: (dictKey: string, eventAction: any) => any;
    /**
     * Create store object
     * @return { any } reducer Object
     */
    createReduxStoreObject: () => void;
}
export {};
