/**
 * @file defines logger for application
 */

// tslint:disable:no-console
export const Log = {
    dir: (obj: any) => {
        console.clear();
        console.dir(obj);
    },
    error: (message: string) => {
        console.error(message);
    },
    info: (message: string) => {
        console.clear();
        console.info(message);

    },
    log: (message: string) => {
        // tslint:disable-next-line:no-console
        console.log(message);

    },
};
