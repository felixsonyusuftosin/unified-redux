"use strict";
/**
 * @file defines logger for application
 */
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
exports.Log = {
    dir: (obj) => {
        console.clear();
        console.dir(obj);
    },
    error: (message) => {
        console.error(message);
    },
    info: (message) => {
        console.clear();
        console.info(message);
    },
    log: (message) => {
        // tslint:disable-next-line:no-console
        console.log(message);
    },
};
