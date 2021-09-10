export declare function uuid(): string;
export declare function isString(val: unknown): val is string;
export declare function isArray(arr: unknown): arr is any[];
export declare function isObject(obj: unknown): obj is {};
export declare function keys<T>(obj: T): (keyof T)[];
export declare function allKeys<T>(obj: T): (keyof T)[];
export declare function isEmpty(obj: {}): boolean;
export declare function extend<T, V>(obj: T, arg: V): T & V;
export declare function makePromise<T>(): Promise<T> & {
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
};
