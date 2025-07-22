import { EnvType } from './types.js';
export const extend = (deep: boolean, target: any, copy: any) => {
  _extendsFn(deep, target, copy);
};

const _extendsFn = (...args: any[]): any => {
  let options, name, src, copy, copyIsArray, clone;
  let target = args[0] || {};
  let i = 1;
  const length = args.length;
  let deep = false;

  if (typeof target === 'boolean') {
    deep = target;
    target = args[1] || {};
    i = 2;
  }

  if (typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }

  for (; i < length; i++) {
    if ((options = args[i]) !== null && options !== undefined) {
      for (name in options) {
        src = target[name];
        copy = options[name];

        if (target === copy) {
          continue;
        }

        if (deep && copy && (typeof copy === 'object' || isArray(copy))) {
          if (isArray(copy)) {
            clone = isArray(src) ? src : [];
          } else {
            clone = isObject(src) ? src : {};
          }
          target[name] = _extendsFn(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
};

export const isArray = (obj: any): boolean => {
  return (
    Array.isArray(obj) ||
    Object.prototype.toString.call(obj) === '[object Array]'
  );
};

export const isObject = (obj: any): boolean => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

// const indexOf = (array, item) => {
//     if (![].indexOf(undefined)) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] === item) {
//                 return i;
//             }
//         }
//         return -1;
//     } else {
//         return array.indexOf(item);
//     }
// }

export const trim = (str: string): string => {
  return str !== '' ? str : str.replace(/^\s+|\s+$/g, '');
};

const isEmptyObject = (obj: { [key: string]: any }) => {
  let name: string;
  for (name in obj) {
    return false;
  }
  return true;
};

export const isNotUndefinedNEmpty = (obj: any): boolean => {
  if (typeof obj !== 'undefined' && !isEmptyObject(obj)) {
    return true;
  }
  return false;
};

export const isFunction = (obj: any): boolean => {
  return typeof obj === 'function';
};

export const sleep = (milliseconds: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
};

export function callbackifyPromise<T>(
  promise: Promise<T>,
  callback?: (error: unknown, result: T | null) => void,
): Promise<T | void> {
  if (callback) {
    return promise.then(
      (res) => {
        setTimeout(() => {
          callback(null, res);
        }, 0);
      },
      (err) => {
        setTimeout(() => {
          callback(err, null);
        }, 0);
      },
    );
  }

  return promise;
}

export function getApiURL(
  env: EnvType,
  urlPrefix: string,
  urlSuffix: string | null | undefined,
  urlIdParam: string,
): string {
  if (typeof env.apiKey === 'undefined' || typeof env.site === 'undefined') {
    throw new Error('Your site or api key is not configured.');
  }
  return (
    env.apiPath +
    urlPrefix +
    (urlIdParam !== null //
      ? '/' + encodeURIComponent(urlIdParam).replace(/%2F/g, '/')
      : '') +
    (urlSuffix !== null ? urlSuffix : '')
  );
}
export function serialize(paramObj: any) {
  let key: string, value: string | Object;
  let array_ops: string[] = ['in', 'not_in', 'between'];
  for (key in paramObj) {
    value = paramObj[key];
    if (typeof value === 'object' && isObject(value)) {
      let old_key = key;
      let child_key: string;
      for (child_key in value) {
        key = key + '[' + child_key + ']';
        paramObj[key] = (value as any)[child_key];
        if (array_ops.includes(child_key)) {
          paramObj[key] = JSON.stringify((value as any)[child_key]);
        }
      }
      delete paramObj[old_key];
      serialize(paramObj);
    } else {
      paramObj[key] = value;
    }
  }
  return paramObj;
}

export function encodeListParams(paramObj: Object) {
  let key, value;
  for (key in paramObj) {
    value = (paramObj as any)[key];
    if (typeof value !== 'undefined' && value !== null && isArray(value)) {
      (paramObj as any)[key] = JSON.stringify(value);
    } else {
      (paramObj as any)[key] = value;
    }
  }
  return encodeParams(paramObj);
}
export function getHost(env: EnvType, subDomain?: string | null): string {
  if (subDomain != null) {
    return env.site + '.' + subDomain + env.hostSuffix;
  }
  return env.site + env.hostSuffix;
}
export function encodeParams(
  paramObj: Object,
  serialized?: String[],
  scope?: string,
  index?: number,
  jsonKeys?: any,
  level = 0,
): string {
  let key: string, value: string;
  if (typeof serialized === 'undefined' || serialized === null) {
    serialized = [];
  }
  for (key in paramObj) {
    value = (paramObj as any)[key];
    const originalKey = key;
    if (scope) {
      key = `${scope}[${key}]`;
    }
    if (typeof index !== 'undefined' && index !== null) {
      key = `${key}[${index}]`;
    }
    if (jsonKeys && jsonKeys[originalKey] === level) {
      let attrVal = '';
      if (value !== null) {
        attrVal = encodeURIComponent(
          Object.prototype.toString.call(value) === '[object String]'
            ? trim(value)
            : JSON.stringify(value),
        );
      }
      serialized.push(encodeURIComponent(key) + '=' + attrVal);
    } else if (
      isArray(value) &&
      !(jsonKeys && jsonKeys[originalKey] === level)
    ) {
      for (let arrIdx = 0; arrIdx < value.length; arrIdx++) {
        if (typeof value[arrIdx] === 'object' || isArray(value[arrIdx])) {
          encodeParams(
            value[arrIdx],
            serialized,
            key,
            arrIdx,
            jsonKeys,
            level + 1,
          );
        } else {
          if (typeof value[arrIdx] !== 'undefined') {
            serialized.push(
              encodeURIComponent(`${key}[${arrIdx}]`) +
                '=' +
                encodeURIComponent(
                  trim(value[arrIdx]) !== '' ? value[arrIdx] : '',
                ),
            );
          }
        }
      }
    } else if (typeof value === 'object' && !isArray(value)) {
      encodeParams(value, serialized, key, undefined, jsonKeys, level + 1);
    } else {
      if (typeof value !== 'undefined') {
        serialized.push(
          encodeURIComponent(key) +
            '=' +
            encodeURIComponent(trim(value) !== '' ? value : ''),
        );
      }
    }
  }
  return serialized.join('&').replace(/%20/g, '+');
}

export function log(
  env: EnvType,
  { level = 'INFO', message = '', context = {}, functionName = '' },
) {
  if (!env.enableDebugLogs) {
    return;
  }
  const timestamp = new Date().toISOString();
  const service = 'chargebee-node';

  const metaString = Object.entries(context)
    .map(([key, value]) => `${key}=${value}`)
    .join(', ');

  const logLine = `[${timestamp}] [${level.toUpperCase()}] [${service}] ${functionName} - ${message}${metaString ? ` (${metaString})` : ''}`;

  console.debug(logLine);
}

export function generateUUIDv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}
