export function uuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		let r = (Math.random() * 16) | 0;
		return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
	});
}

export function isString(val: unknown): val is string {
	let type = typeof val;
	return type === "string";
}

export function isArray(arr: unknown): arr is any[] {
	return Array.isArray(arr);
}

export function isObject(obj: unknown): obj is {} {
	let type = typeof obj;
	return (type === "function" || type === "object") && !!obj;
}

export function keys<T>(obj: T): (keyof T)[] {
	if (!isObject(obj)) {
		return [];
	}
	return Object.keys(obj) as (keyof T)[];
}

export function allKeys<T>(obj: T): (keyof T)[] {
	if (!isObject(obj)) {
		return [];
	}
	let keys = [];
	for (let key in obj) {
		keys.push(key);
	}
	return keys;
}

export function isEmpty(obj: {}) {
	if (obj === null || obj === undefined) {
		return true;
	}
	if (isArray(obj) || isString(obj)) {
		return obj.length === 0;
	}
	return keys(obj).length === 0;
}

export function extend<T, V>(obj: T, arg: V) {

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

export function makePromise<T>() {
	let resolve: (value: T | PromiseLike<T>) => void = () => { };
	let reject: (reason?: any) => void = () => { };
	let p = new Promise<T>((r, j) => (resolve = r, reject = j));
	return Object.assign(p, { resolve, reject });
}

// module.exports = {
// 	uuid: uuid,
// 	isString: isString,
// 	isArray: isArray,
// 	isObject: isObject,
// 	isEmpty: isEmpty,
// 	extend: extend,
// 	makePromise: makePromise,
// };