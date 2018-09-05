"use strict";
/**
 * @file file that defines entry point into the module
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Local imports
 */
const actionConfig_1 = require("./store/actions/actionConfig");
const index_1 = __importDefault(require("./store/index"));
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
class UnifiedStore {
    /*
     * *********************
     * Static methods
     *  *********************
     */
    /**
     * @method constructor def
     * @param { IconstructorProps } - props
     */
    constructor(props) {
        /**
         * public  dispatchActions
         * dispatches actions as an action creator
         * @return dispatchAction function calls with the right param
         */
        this.dispatchActions = (dictKey, eventAction) => {
            return actionConfig_1.dispatchActions(dictKey, eventAction, this.actionDictionary);
        };
        /**
         * Create store object
         * @return { any } reducer Object
         */
        this.createReduxStoreObject = () => {
            const st = index_1.default(this.actionDictionary);
            return st;
        };
        const { dictionary } = props;
        this.actionDictionary = dictionary;
        this.store = this.createReduxStoreObject();
    }
}
exports.default = UnifiedStore;
