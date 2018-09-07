/**
 * @file file that defines entry point into the module
 */

/**
 * Local imports
 */
import { dispatchActions } from "./store/actions/actionConfig";
import store from "./store/index";

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

// NA

/**
 * Interface declarations
 */

interface IunifiedStore {
    // store item
    store: any;
    dispatchActions?(dictKey: string, eventAction: IeventAction): any;
    createReduxStoreObject(): void;

}
interface IconstructorProps {
    // used for dispatching actions on the components
    dictionary: IactionDictionary;
}

/**
 * Global constants
 */
// NA

/* ******************************
 * Class Implementation
 * ---------------------------
 * Documentation
 * ---------------------------
 * *******************************
 */
export class UnifiedRedux implements IunifiedStore {
    /*
     * *********************
     * Static properties
     *  *********************
     */
    public actionDictionary: IactionDictionary;
    public store: any;

    /*
     * *********************
     * Static methods
     *  *********************
     */

    /**
     * @method constructor def
     * @param { IconstructorProps } - props
     */
    constructor(props: IconstructorProps) {
        const { dictionary } = props;
        this.actionDictionary = dictionary;
        this.store = this.createReduxStoreObject();
    }
    /**
     * public  dispatchActions
     * dispatches actions as an action creator
     * @return dispatchAction function calls with the right param
     */
    public dispatchActions = (dictKey: string, eventAction: any): any => {
        return dispatchActions(dictKey, eventAction, this.actionDictionary);
    }
    /**
     * Create store object
     * @return { any } reducer Object
     */
    public createReduxStoreObject = () => {
        const st = store(this.actionDictionary);
        return st;
    }

    /**
     * *********************
     * body methods
     * -----------------
     * Method TOC
     * ------------------------
     * **********************
     */

}
