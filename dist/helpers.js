"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePromise = exports.extend = exports.isEmpty = exports.allKeys = exports.keys = exports.isObject = exports.isArray = exports.isString = exports.uuid = void 0;
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
}
exports.uuid = uuid;
function isString(val) {
    let type = typeof val;
    return type === "string";
}
exports.isString = isString;
function isArray(arr) {
    return Array.isArray(arr);
}
exports.isArray = isArray;
function isObject(obj) {
    let type = typeof obj;
    return (type === "function" || type === "object") && !!obj;
}
exports.isObject = isObject;
function keys(obj) {
    if (!isObject(obj)) {
        return [];
    }
    return Object.keys(obj);
}
exports.keys = keys;
function allKeys(obj) {
    if (!isObject(obj)) {
        return [];
    }
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
exports.allKeys = allKeys;
function isEmpty(obj) {
    if (obj === null || obj === undefined) {
        return true;
    }
    if (isArray(obj) || isString(obj)) {
        return obj.length === 0;
    }
    return keys(obj).length === 0;
}
exports.isEmpty = isEmpty;
function extend(obj, arg) {
    return Object.assign(obj, arg);
    // let length = args.length;
    // if (length < 1 || obj === null || obj === undefined) {
    // 	return obj as R;
    // }
    // for (let index = 0; index < length; index++) {
    // 	let source = args[index],
    // 		keys = allKeys(source),
    // 		l = keys.length;
    // 	for (let i = 0; i < l; i++) {
    // 		let key = keys[i];
    // 		obj[key] = source[key];
    // 	}
    // }
    // return obj as R;
}
exports.extend = extend;
function makePromise() {
    let resolve = () => { };
    let reject = () => { };
    let p = new Promise((r, j) => (resolve = r, reject = j));
    return Object.assign(p, { resolve, reject });
}
exports.makePromise = makePromise;
// module.exports = {
// 	uuid: uuid,
// 	isString: isString,
// 	isArray: isArray,
// 	isObject: isObject,
// 	isEmpty: isEmpty,
// 	extend: extend,
// 	makePromise: makePromise,
// };
