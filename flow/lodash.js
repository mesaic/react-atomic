type TemplateSettings = {
  escape?: RegExp,
  evaluate?: RegExp,
  imports?: Object,
  interpolate?: RegExp,
  variable?: string,
};

type TruncateOptions = {
  length?: number,
  omission?: string,
  separator?: RegExp|string,
};

type DebounceOptions = {
  leading?: bool,
  maxWait?: number,
  trailing?: bool,
};

type ThrottleOptions = {
  leading?: bool,
  trailing?: bool,
};

type NestedArray<T> = Array<Array<T>>;

type OPredicate<O> = ((value: ?any, key: ?string, object: ?O) => ?bool)|Object|string;
type OIterateeWithResult<V, O, R> = ((value: V, key: string, object: O) => R)|Object|string;
type OIteratee<O> = OIterateeWithResult<any, O, any>;

type Predicate<T> = ((value: T, index: number, array: Array<T>) => ?bool)
                  | ((value: T, index: number) => ?bool)
                  | ((value: T) => ?bool)
                  | Object | string;
type _Iteratee<T> = (item: T, index: number, array: ?Array<T>) => mixed;
type Iteratee<T> = _Iteratee<T>|Object|string;
type Iteratee2<T, U> = ((item: T, index: number, array: ?Array<T>) => U)|Object|string;
type FlatMapIteratee<T, U> = ((item: T, index: number, array: ?Array<T>) => Array<U>)|Object|string;
type Comparator<T> = (item: T, item2: T) => bool;

type MapIterator1<T,U> = (item: T) => U;
type MapIterator2<T,U> = (item: T, index: number) => U;
type MapIterator3<T,U> = (item: T, index: number, array: Array<T>) => U;
type MapIterator<T,U> = MapIterator1<T,U>|MapIterator2<T,U>|MapIterator3<T,U>;

declare module 'lodash/chunk' { declare function exports<T>(array: ?Array<T>, size?: number): Array<T>; }
declare module 'lodash/compact' { declare function exports<T,N:?T>(array: Array<N>): Array<T>; }
declare module 'lodash/concat' { declare function exports<T>(base: Array<T>, ...elements: Array<any>): Array<T|any>; }
declare module 'lodash/difference' { declare function exports<T>(array: ?Array<T>, values?: Array<T>): Array<T>; }
declare module 'lodash/differenceBy' { declare function exports<T>(array: ?Array<T>, values: Array<T>, iteratee: Iteratee<T>): T[]; }
declare module 'lodash/differenceWith' { declare function exports<T>(array: T[], values: T[], comparator?: Comparator<T>): T[]; }
declare module 'lodash/drop' { declare function exports<T>(array: ?Array<T>, n?: number): Array<T>; }
declare module 'lodash/dropRight' { declare function exports<T>(array: ?Array<T>, n?: number): Array<T>; }
declare module 'lodash/dropRightWhile' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/dropWhile' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/fill' { declare function exports<T, U>(array: ?Array<T>, value: U, start?: number, end?: number): Array<T|U>; }
declare module 'lodash/findIndex' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): number; }
declare module 'lodash/findLastIndex' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): number; }
declare module 'lodash/first' { declare function exports<T>(array: ?Array<T>): T; }
declare module 'lodash/flatten' { declare function exports(array: any[]): any[]; }
declare module 'lodash/flattenDeep' { declare function exports<T>(array: any[]): Array<T>; }
declare module 'lodash/flattenDepth' { declare function exports(array: any[], depth?: number): any[]; }
declare module 'lodash/fromPairs' { declare function exports<T>(pairs: Array<T>): Object; }
declare module 'lodash/head' { declare function exports<T>(array: ?Array<T>): T; }
declare module 'lodash/indexOf' { declare function exports<T>(array: ?Array<T>, value: T, fromIndex?: number): number; }
declare module 'lodash/initial' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/intersection' { declare function exports<T>(...arrays: Array<Array<T>>): Array<T>; }
declare module 'lodash/intersectionBy' { declare function exports<T>(a1: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/intersectionBy' { declare function exports<T>(a1: Array<T>, a2: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/intersectionBy' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/intersectionBy' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/intersectionWith' { declare function exports<T>(a1: Array<T>, comparator: Comparator<T>): Array<T>; }
declare module 'lodash/intersectionWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, comparator: Comparator<T>): Array<T>; }
declare module 'lodash/intersectionWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator: Comparator<T>): Array<T>; }
declare module 'lodash/intersectionWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator: Comparator<T>): Array<T>; }
declare module 'lodash/join' { declare function exports<T>(array: ?Array<T>, separator?: string): string; }
declare module 'lodash/last' { declare function exports<T>(array: ?Array<T>): T; }
declare module 'lodash/lastIndexOf' { declare function exports<T>(array: ?Array<T>, value: T, fromIndex?: number): number; }
declare module 'lodash/nth' { declare function exports<T>(array: T[], n?: number): T; }
declare module 'lodash/pull' { declare function exports<T>(array: ?Array<T>, ...values?: Array<T>): Array<T>; }
declare module 'lodash/pullAll' { declare function exports<T>(array: ?Array<T>, values: Array<T>): Array<T>; }
declare module 'lodash/pullAllBy' { declare function exports<T>(array: ?Array<T>, values: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/pullAllWith' { declare function exports<T>(array?: T[], values: T[], comparator?: Function): T[]; }
declare module 'lodash/pullAt' { declare function exports<T>(array: ?Array<T>, ...indexed?: Array<number>): Array<T>; }
declare module 'lodash/pullAt' { declare function exports<T>(array: ?Array<T>, indexed?: Array<number>): Array<T>; }
declare module 'lodash/remove' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/reverse' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/slice' { declare function exports<T>(array: ?Array<T>, start?: number, end?: number): Array<T>; }
declare module 'lodash/sortedIndex' { declare function exports<T>(array: ?Array<T>, value: T): number; }
declare module 'lodash/sortedIndexBy' { declare function exports<T>(array: ?Array<T>, value: T, iteratee?: Iteratee<T>): number; }
declare module 'lodash/sortedIndexOf' { declare function exports<T>(array: ?Array<T>, value: T): number; }
declare module 'lodash/sortedLastIndex' { declare function exports<T>(array: ?Array<T>, value: T): number; }
declare module 'lodash/sortedLastIndexBy' { declare function exports<T>(array: ?Array<T>, value: T, iteratee?: Iteratee<T>): number; }
declare module 'lodash/sortedLastIndexOf' { declare function exports<T>(array: ?Array<T>, value: T): number; }
declare module 'lodash/sortedUniq' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/sortedUniqBy' { declare function exports<T>(array: ?Array<T>, iteratee?: (value: T) => mixed): Array<T>; }
declare module 'lodash/tail' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/take' { declare function exports<T>(array: ?Array<T>, n?: number): Array<T>; }
declare module 'lodash/takeRight' { declare function exports<T>(array: ?Array<T>, n?: number): Array<T>; }
declare module 'lodash/takeRightWhile' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/takeWhile' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/union' { declare function exports<T>(array?: Array<T>): Array<T>; }
declare module 'lodash/unionBy' { declare function exports<T>(array?: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/unionWith' { declare function exports<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/unionWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/unionWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/unionWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/uniq' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/uniqBy' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/uniqWith' { declare function exports<T>(array: ?Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/unzip' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/unzipWith' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/without' { declare function exports<T>(array: ?Array<T>, ...values?: Array<T>): Array<T>; }
declare module 'lodash/xor' { declare function exports<T>(...array: Array<Array<T>>): Array<T>; }
declare module 'lodash/xorBy' { declare function exports<T>(a1: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/xorBy' { declare function exports<T>(a1: Array<T>, a2: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/xorBy' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/xorBy' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/xorWith' { declare function exports<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/xorWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/xorWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/xorWith' { declare function exports<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator?: Comparator<T>): Array<T>; }
declare module 'lodash/zip' { declare function exports<T>(...arrays: Array<Array<T>>): NestedArray<T>; }
declare module 'lodash/zipObject' { declare function exports(props?: Array<any>, values?: Array<any>): Object; }
declare module 'lodash/zipObjectDeep' { declare function exports(props?: any[], values?: any): Object; }
declare module 'lodash/zipWith' { declare function exports<T>(a1: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/zipWith' { declare function exports<T>(a1: NestedArray<T>, a2: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/zipWith' { declare function exports<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/zipWith' { declare function exports<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, a4: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/countBy' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Object; }
declare module 'lodash/countBy' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): Object; }
declare module 'lodash/each' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/each' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): T; }
declare module 'lodash/eachRight' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/eachRight' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): T; }
declare module 'lodash/every' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): bool; }
declare module 'lodash/every' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): bool; }
declare module 'lodash/filter' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/filter' { declare function exports<V, T: Object>(object: T, predicate?: OPredicate<T>): Array<any>; }
declare module 'lodash/find' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): T; }
// declare module 'lodash/find' { declare function exports<V, T: Object>(object: T, predicate?: OPredicate<T>): V; }
declare module 'lodash/findLast' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): T; }
declare module 'lodash/findLast' { declare function exports<V, T>(object: T, predicate?: OPredicate<T>): V; }
declare module 'lodash/flatMap' { declare function exports<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>): Array<U>; }
declare module 'lodash/flatMapDeep' { declare function exports<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>): Array<U>; }
declare module 'lodash/flatMapDepth' { declare function exports<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>, depth?: number): Array<U>; }
// declare module 'lodash/forEach' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/forEach' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): T; }
declare module 'lodash/forEachRight' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>; }
declare module 'lodash/forEachRight' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): T; }
declare module 'lodash/groupBy' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Object; }
declare module 'lodash/groupBy' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): Object; }
declare module 'lodash.groupby' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Object; }
declare module 'lodash.groupby' { declare function exports<T: Object>(object: T, iteratee?: OIteratee<T>): Object; }
declare module 'lodash/includes' { declare function exports<T>(array: ?Array<T>, value: T, fromIndex?: number): bool; }
// declare module 'lodash/includes' { declare function exports<T: Object>(object: T, value: any, fromIndex?: number): bool; }
// declare module 'lodash/includes' { declare function exports(str: string, value: string, fromIndex?: number): bool; }
declare module 'lodash/invokeMap' { declare function exports<T>(array: ?Array<T>, path: ((value: T) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>; }
declare module 'lodash/invokeMap' { declare function exports<T: Object>(object: T, path: ((value: any) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>; }
declare module 'lodash/keyBy' { declare function exports<T, V>(array: ?Array<T>, iteratee?: Iteratee2<T, V>): {[key: V]: T}; }
// declare module 'lodash/keyBy' { declare function exports<V, T: Object>(object: T, iteratee?: OIteratee<T>): Object; }
declare module 'lodash/map' { declare function exports<T, U>(array: ?Array<T>, iteratee?: MapIterator<T, U>): Array<U>; }
declare module 'lodash/map' { declare function exports<V, T: Object, U>(object: ?T, iteratee?: OIterateeWithResult<V, T, U>): Array<U>; }
declare module 'lodash/map' { declare function exports(str: ?string, iteratee?: (char: string, index: number, str: string) => any): string; }
declare module 'lodash/orderBy' { declare function exports<T>(array: ?Array<T>, iteratees?: Array<Iteratee<T>>|string, orders?: Array<'asc'|'desc'>|string): Array<T>; }
declare module 'lodash/orderBy' { declare function exports<V, T: Object>(object: T, iteratees?: Array<OIteratee<*>>|string, orders?: Array<'asc'|'desc'>|string): Array<V>; }
declare module 'lodash/partition' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): NestedArray<T>; }
declare module 'lodash/reduce' { declare function exports<T, U>(array: ?Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: ?Array<T>) => U, accumulator?: U): U; }
declare module 'lodash/reduce' { declare function exports<T: Object, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U; }
declare module 'lodash/reduceRight' { declare function exports<T, U>(array: ?Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: ?Array<T>) => U, accumulator?: U): U; }
declare module 'lodash/reduceRight' { declare function exports<T: Object, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U; }
declare module 'lodash/reject' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>; }
declare module 'lodash/reject' { declare function exports<V: Object, T>(object: T, predicate?: OPredicate<T>): Array<V>; }
declare module 'lodash/sample' { declare function exports<T>(array: ?Array<T>): T; }
declare module 'lodash/sample' { declare function exports<V, T: Object>(object: T): V; }
declare module 'lodash/sampleSize' { declare function exports<T>(array: ?Array<T>, n?: number): Array<T>; }
declare module 'lodash/sampleSize' { declare function exports<V, T: Object>(object: T, n?: number): Array<V>; }
declare module 'lodash/shuffle' { declare function exports<T>(array: ?Array<T>): Array<T>; }
declare module 'lodash/shuffle' { declare function exports<V, T: Object>(object: T): Array<V>; }
declare module 'lodash/size' { declare function exports(collection: Array<any>|Object): number; }
declare module 'lodash/some' { declare function exports<T>(array: ?Array<T>, predicate?: Predicate<T>): bool; }
// declare module 'lodash/some' { declare function exports<T: Object>(object?: ?Object, predicate?: OPredicate<T>): bool; }
declare module 'lodash/sortBy' { declare function exports<T>(array: ?Array<T>, ...iteratees?: Array<Iteratee<T>>): Array<T>; }
// declare module 'lodash/sortBy' { declare function exports<T>(array: ?Array<T>, iteratees?: Array<Iteratee<T>>): Array<T>; }
// declare module 'lodash/sortBy' { declare function exports<V, T: Object>(object: T, ...iteratees?: Array<OIteratee<T>>): Array<V>; }
// declare module 'lodash/sortBy' { declare function exports<V, T: Object>(object: T, iteratees?: Array<OIteratee<T>>): Array<V>; }
declare module 'lodash/now' { declare function exports(): number; }
declare module 'lodash/after' { declare function exports(n: number, fn: Function): Function; }
declare module 'lodash/ary' { declare function exports(func: Function, n?: number): Function; }
declare module 'lodash/before' { declare function exports(n: number, fn: Function): Function; }
declare module 'lodash/bind' { declare function exports(func: Function, thisArg: any, ...partials: Array<any>): Function; }
declare module 'lodash/bindKey' { declare function exports(obj: Object, key: string, ...partials: Array<any>): Function; }
declare module 'lodash/curry' { declare function exports(func: Function, arity?: number): Function; }
declare module 'lodash/curryRight' { declare function exports(func: Function, arity?: number): Function; }
declare module 'lodash/debounce' { declare function exports(func: Function, wait?: number, options?: DebounceOptions): Function; }
declare module 'lodash/defer' { declare function exports(func: Function, ...args?: Array<any>): number; }
declare module 'lodash/delay' { declare function exports(func: Function, wait: number, ...args?: Array<any>): number; }
declare module 'lodash/flip' { declare function exports(func: Function): Function; }
declare module 'lodash/memoize' { declare function exports(func: Function, resolver?: Function): Function; }
declare module 'lodash/negate' { declare function exports(predicate: Function): Function; }
declare module 'lodash/once' { declare function exports(func: Function): Function; }
declare module 'lodash/overArgs' { declare function exports(func: Function, ...transforms: Array<Function>): Function; }
declare module 'lodash/overArgs' { declare function exports(func: Function, transforms: Array<Function>): Function; }
declare module 'lodash/partial' { declare function exports(func: Function, ...partials: any[]): Function; }
declare module 'lodash/partialRight' { declare function exports(func: Function, ...partials: Array<any>): Function; }
declare module 'lodash/partialRight' { declare function exports(func: Function, partials: Array<any>): Function; }
declare module 'lodash/rearg' { declare function exports(func: Function, ...indexes: Array<number>): Function; }
declare module 'lodash/rearg' { declare function exports(func: Function, indexes: Array<number>): Function; }
declare module 'lodash/rest' { declare function exports(func: Function, start?: number): Function; }
declare module 'lodash/spread' { declare function exports(func: Function): Function; }
declare module 'lodash/throttle' { declare function exports(func: Function, wait?: number, options?: ThrottleOptions): Function; }
declare module 'lodash/unary' { declare function exports(func: Function): Function; }
declare module 'lodash/wrap' { declare function exports(value: any, wrapper: Function): Function; }
declare module 'lodash/castArray' { declare function exports(value: *): any[]; }
declare module 'lodash/clone' { declare function exports<T>(value: T): T; }
declare module 'lodash/cloneDeep' { declare function exports<T>(value: T): T; }
declare module 'lodash/cloneDeepWith' { declare function exports<T, U>(value: T, customizer?: ?(value: T, key: number|string, object: T, stack: any) => U): U; }
declare module 'lodash/cloneWith' { declare function exports<T, U>(value: T, customizer?: ?(value: T, key: number|string, object: T, stack: any) => U): U; }
declare module 'lodash/conformsTo' { declare function exports<T:{[key:string]:mixed}>(source: T, predicates: T&{[key:string]:(x:any)=>boolean}): boolean; }
declare module 'lodash/eq' { declare function exports(value: any, other: any): bool; }
declare module 'lodash/gt' { declare function exports(value: any, other: any): bool; }
declare module 'lodash/gte' { declare function exports(value: any, other: any): bool; }
declare module 'lodash/isArguments' { declare function exports(value: any): bool; }
declare module 'lodash/isArray' { declare function exports(value: any): bool; }
declare module 'lodash/isArrayBuffer' { declare function exports(value: any): bool; }
declare module 'lodash/isArrayLike' { declare function exports(value: any): bool; }
declare module 'lodash/isArrayLikeObject' { declare function exports(value: any): bool; }
declare module 'lodash/isBoolean' { declare function exports(value: any): bool; }
declare module 'lodash/isBuffer' { declare function exports(value: any): bool; }
declare module 'lodash/isDate' { declare function exports(value: any): bool; }
declare module 'lodash/isElement' { declare function exports(value: any): bool; }
declare module 'lodash/isEmpty' { declare function exports(value: any): bool; }
declare module 'lodash/isEqual' { declare function exports(value: any, other: any): bool; }
declare module 'lodash/isEqualWith' { declare function exports<T, U>(value: T, other: U, customizer?: (objValue: any, otherValue: any, key: number|string, object: T, other: U, stack: any) => bool|void): bool; }
declare module 'lodash/isError' { declare function exports(value: any): bool; }
declare module 'lodash/isFinite' { declare function exports(value: any): bool; }
declare module 'lodash/isFunction' { declare function exports(value: Function): true; }
declare module 'lodash/isFunction' { declare function exports(value: number|string|void|null|Object): false; }
declare module 'lodash/isInteger' { declare function exports(value: any): bool; }
declare module 'lodash/isLength' { declare function exports(value: any): bool; }
declare module 'lodash/isMap' { declare function exports(value: any): bool; }
declare module 'lodash/isMatch' { declare function exports(object?: ?Object, source: Object): bool; }
declare module 'lodash/isMatchWith' { declare function exports<T: Object, U: Object>(object: T, source: U, customizer?: (objValue: any, srcValue: any, key: number|string, object: T, source: U) => bool|void): bool; }
declare module 'lodash/isNaN' { declare function exports(value: any): bool; }
declare module 'lodash/isNative' { declare function exports(value: any): bool; }
declare module 'lodash/isNil' { declare function exports(value: any): bool; }
declare module 'lodash/isNull' { declare function exports(value: any): bool; }
declare module 'lodash/isNumber' { declare function exports(value: any): bool; }
declare module 'lodash/isObject' { declare function exports(value: any): bool; }
declare module 'lodash/isObjectLike' { declare function exports(value: any): bool; }
declare module 'lodash/isPlainObject' { declare function exports(value: any): bool; }
declare module 'lodash/isRegExp' { declare function exports(value: any): bool; }
declare module 'lodash/isSafeInteger' { declare function exports(value: any): bool; }
declare module 'lodash/isSet' { declare function exports(value: any): bool; }
declare module 'lodash/isString' { declare function exports(value: any): bool; }
declare module 'lodash/isSymbol' { declare function exports(value: any): bool; }
declare module 'lodash/isTypedArray' { declare function exports(value: any): bool; }
declare module 'lodash/isUndefined' { declare function exports(value: any): bool; }
declare module 'lodash/isWeakMap' { declare function exports(value: any): bool; }
declare module 'lodash/isWeakSet' { declare function exports(value: any): bool; }
declare module 'lodash/lt' { declare function exports(value: any, other: any): bool; }
declare module 'lodash/lte' { declare function exports(value: any, other: any): bool; }
declare module 'lodash/toArray' { declare function exports(value: any): Array<any>; }
declare module 'lodash/toFinite' { declare function exports(value: any): number; }
declare module 'lodash/toInteger' { declare function exports(value: any): number; }
declare module 'lodash/toLength' { declare function exports(value: any): number; }
declare module 'lodash/toNumber' { declare function exports(value: any): number; }
declare module 'lodash/toPlainObject' { declare function exports(value: any): Object; }
declare module 'lodash/toSafeInteger' { declare function exports(value: any): number; }
declare module 'lodash/toString' { declare function exports(value: any): string; }
declare module 'lodash/add' { declare function exports(augend: number, addend: number): number; }
declare module 'lodash/ceil' { declare function exports(number: number, precision?: number): number; }
declare module 'lodash/divide' { declare function exports(dividend: number, divisor: number): number; }
declare module 'lodash/floor' { declare function exports(number: number, precision?: number): number; }
declare module 'lodash/max' { declare function exports<T>(array: ?Array<T>): T; }
declare module 'lodash/maxBy' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T; }
declare module 'lodash/mean' { declare function exports(array: Array<*>): number; }
declare module 'lodash/meanBy' { declare function exports<T>(array: Array<T>, iteratee?: Iteratee<T>): number; }
declare module 'lodash/min' { declare function exports<T>(array: ?Array<T>): T; }
declare module 'lodash/minBy' { declare function exports<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T; }
declare module 'lodash/multiply' { declare function exports(multiplier: number, multiplicand: number): number; }
declare module 'lodash/round' { declare function exports(number: number, precision?: number): number; }
declare module 'lodash/subtract' { declare function exports(minuend: number, subtrahend: number): number; }
declare module 'lodash/sum' { declare function exports(array: Array<*>): number; }
declare module 'lodash/sumBy' { declare function exports<T>(array: Array<T>, iteratee?: Iteratee<T>): number; }
declare module 'lodash/clamp' { declare function exports(number: number, lower?: number, upper: number): number; }
declare module 'lodash/inRange' { declare function exports(number: number, start?: number, end: number): bool; }
declare module 'lodash/random' { declare function exports(lower?: number, upper?: number, floating?: bool): number; }
declare module 'lodash/assign' { declare function exports(object?: ?Object, ...sources?: Array<Object>): Object; }
declare module 'lodash/assignIn' { declare function exports(object?: ?Object, ...sources?: Array<Object>): Object; }
declare module 'lodash/assignInWith' { declare function exports<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object; }
declare module 'lodash/assignInWith' { declare function exports<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object; }
declare module 'lodash/assignInWith' { declare function exports<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object; }
declare module 'lodash/assignInWith' { declare function exports<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object; }
declare module 'lodash/assignWith' { declare function exports<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object; }
declare module 'lodash/assignWith' { declare function exports<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object; }
declare module 'lodash/assignWith' { declare function exports<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object; }
declare module 'lodash/assignWith' { declare function exports<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object; }
declare module 'lodash/at' { declare function exports(object?: ?Object, ...paths: Array<string>): Array<any>; }
declare module 'lodash/at' { declare function exports(object?: ?Object, paths: Array<string>): Array<any>; }
declare module 'lodash/create' { declare function exports<T>(prototype: T, properties?: Object): $Supertype<T>; }
declare module 'lodash/defaults' { declare function exports(object?: ?Object, ...sources?: Array<Object>): Object; }
declare module 'lodash/defaultsDeep' { declare function exports(object?: ?Object, ...sources?: Array<Object>): Object; }
declare module 'lodash/entries' { declare function exports(object?: ?Object): NestedArray<any>; }
declare module 'lodash/entriesIn' { declare function exports(object?: ?Object): NestedArray<any>; }
declare module 'lodash/extend' { declare function exports(object?: ?Object, ...sources?: Array<Object>): Object; }
declare module 'lodash/extendWith' { declare function exports<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object; }
declare module 'lodash/extendWith' { declare function exports<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object; }
declare module 'lodash/extendWith' { declare function exports<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object; }
declare module 'lodash/extendWith' { declare function exports<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object; }
declare module 'lodash/findKey' { declare function exports(object?: ?Object, predicate?: OPredicate<*>): string|void; }
declare module 'lodash/findLastKey' { declare function exports(object?: ?Object, predicate?: OPredicate<*>): string|void; }
declare module 'lodash/forIn' { declare function exports(object?: ?Object, iteratee?: OIteratee<*>): Object; }
declare module 'lodash/forInRight' { declare function exports(object?: ?Object, iteratee?: OIteratee<*>): Object; }
declare module 'lodash/forOwn' { declare function exports(object?: ?Object, iteratee?: OIteratee<*>): Object; }
declare module 'lodash/forOwnRight' { declare function exports(object?: ?Object, iteratee?: OIteratee<*>): Object; }
declare module 'lodash/functions' { declare function exports(object?: ?Object): Array<string>; }
declare module 'lodash/functionsIn' { declare function exports(object?: ?Object): Array<string>; }
declare module 'lodash/get' { declare function exports(object?: ?Object, path?: ?Array<string>|string, defaultValue?: any): any; }
declare module 'lodash/has' { declare function exports(object?: ?Object, path?: ?Array<string>|string): bool; }
declare module 'lodash/hasIn' { declare function exports(object?: ?Object, path?: ?Array<string>|string): bool; }
declare module 'lodash/invert' { declare function exports(object?: ?Object, multiVal?: bool): Object; }
declare module 'lodash/invertBy' { declare function exports(object: ?Object, iteratee?: Function): Object; }
declare module 'lodash/invoke' { declare function exports(object?: ?Object, path?: ?Array<string>|string, ...args?: Array<any>): any; }
declare module 'lodash/keys' { declare function exports(object?: ?Object): Array<string>; }
declare module 'lodash/keysIn' { declare function exports(object?: ?Object): Array<string>; }
declare module 'lodash/mapKeys' { declare function exports(object?: ?Object, iteratee?: OIteratee<*>): Object; }
declare module 'lodash/mapValues' { declare function exports(object?: ?Object, iteratee?: OIteratee<*>): Object; }
declare module 'lodash/merge' { declare function exports(object?: ?Object, ...sources?: Array<?Object>): Object; }
declare module 'lodash.merge' { declare function exports(object?: ?Object, ...sources?: Array<?Object>): Object; }
declare module 'lodash/mergeWith' { declare function exports<T: Object, A: Object>(object: T, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object; }
declare module 'lodash/mergeWith' { declare function exports<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object; }
declare module 'lodash/mergeWith' { declare function exports<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object; }
// declare module 'lodash/mergeWith' { declare function exports<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object; }
// declare module 'lodash/omit' { declare function exports(object?: ?Object, ...props: Array<string>): Object; }
declare module 'lodash/omit' { declare function exports(object?: ?Object, props: Array<string>): Object; }
declare module 'lodash/omitBy' { declare function exports(object?: ?Object, predicate?: OPredicate<*>): Object; }
declare module 'lodash/pick' { declare function exports(object?: ?Object, props: Array<string>): Object; }
// declare module 'lodash/pick' { declare function exports(object?: ?Object, ...props: Array<string>): Object; }
declare module 'lodash/pickBy' { declare function exports(object?: ?Object, predicate?: OPredicate<*>): Object; }
declare module 'lodash/result' { declare function exports(object?: ?Object, path?: ?Array<string>|string, defaultValue?: any): any; }
declare module 'lodash/set' { declare function exports(object?: ?Object, path?: ?Array<string>|string, value: any): Object; }
declare module 'lodash/setWith' { declare function exports<T>(object: T, path?: ?Array<string>|string, value: any, customizer?: (nsValue: any, key: string, nsObject: T) => any): Object; }
declare module 'lodash/toPairs' { declare function exports(object?: ?Object|Array<*>): NestedArray<any>; }
declare module 'lodash/toPairsIn' { declare function exports(object?: ?Object): NestedArray<any>; }
declare module 'lodash/transform' { declare function exports(collection: Object|Array<any>, iteratee?: OIteratee<*>, accumulator?: any): any; }
declare module 'lodash/unset' { declare function exports(object?: ?Object, path?: ?Array<string>|string): bool; }
declare module 'lodash/update' { declare function exports(object: Object, path: string[]|string, updater: Function): Object; }
declare module 'lodash/updateWith' { declare function exports(object: Object, path: string[]|string, updater: Function, customizer?: Function): Object; }
declare module 'lodash/values' { declare function exports(object?: ?Object): Array<any>; }
declare module 'lodash/valuesIn' { declare function exports(object?: ?Object): Array<any>; }
declare module 'lodash/_' { declare function exports(value: any): any; }
declare module 'lodash/chain' { declare function exports<T>(value: T): any; }
declare module 'lodash/tap' { declare function exports<T>(value: T, interceptor: (value:T)=>any): T; }
declare module 'lodash/thru' { declare function exports<T1,T2>(value: T1, interceptor: (value:T1)=>T2): T2; }
declare module 'lodash/camelCase' { declare function exports(string?: ?string): string; }
declare module 'lodash/capitalize' { declare function exports(string?: string): string; }
declare module 'lodash/deburr' { declare function exports(string?: string): string; }
declare module 'lodash/endsWith' { declare function exports(string?: string, target?: string, position?: number): bool; }
declare module 'lodash/escape' { declare function exports(string?: string): string; }
declare module 'lodash/escapeRegExp' { declare function exports(string?: string): string; }
declare module 'lodash/kebabCase' { declare function exports(string?: string): string; }
declare module 'lodash/lowerCase' { declare function exports(string?: string): string; }
declare module 'lodash/lowerFirst' { declare function exports(string?: string): string; }
declare module 'lodash/pad' { declare function exports(string?: string, length?: number, chars?: string): string; }
declare module 'lodash/padEnd' { declare function exports(string?: string, length?: number, chars?: string): string; }
declare module 'lodash/padStart' { declare function exports(string?: string, length?: number, chars?: string): string; }
declare module 'lodash/parseInt' { declare function exports(string: string, radix?: number): number; }
declare module 'lodash/repeat' { declare function exports(string?: string, n?: number): string; }
declare module 'lodash/replace' { declare function exports(string?: string, pattern: RegExp|string, replacement: ((string: string) => string)|string): string; }
declare module 'lodash/snakeCase' { declare function exports(string?: string): string; }
declare module 'lodash/split' { declare function exports(string?: string, separator: RegExp|string, limit?: number): Array<string>; }
declare module 'lodash/startCase' { declare function exports(string?: string): string; }
declare module 'lodash/startsWith' { declare function exports(string?: string, target?: string, position?: number): bool; }
declare module 'lodash/template' { declare function exports(string?: string, options?: TemplateSettings): Function; }
declare module 'lodash/toLower' { declare function exports(string?: string): string; }
declare module 'lodash/toUpper' { declare function exports(string?: string): string; }
declare module 'lodash/trim' { declare function exports(string?: string, chars?: string): string; }
declare module 'lodash/trimEnd' { declare function exports(string?: string, chars?: string): string; }
declare module 'lodash/trimStart' { declare function exports(string?: string, chars?: string): string; }
declare module 'lodash/truncate' { declare function exports(string?: string, options?: TruncateOptions): string; }
declare module 'lodash/unescape' { declare function exports(string?: string): string; }
declare module 'lodash/upperCase' { declare function exports(string?: string): string; }
declare module 'lodash/upperFirst' { declare function exports(string?: string): string; }
declare module 'lodash/words' { declare function exports(string?: string, pattern?: RegExp|string): Array<string>; }
declare module 'lodash/attempt' { declare function exports(func: Function): any; }
declare module 'lodash/bindAll' { declare function exports(object?: ?Object, methodNames: Array<string>): Object; }
declare module 'lodash/bindAll' { declare function exports(object?: ?Object, ...methodNames: Array<string>): Object; }
declare module 'lodash/cond' { declare function exports(pairs: NestedArray<Function>): Function; }
declare module 'lodash/conforms' { declare function exports(source: Object): Function; }
declare module 'lodash/constant' { declare function exports<T>(value: T): () => T; }
declare module 'lodash/defaultTo' { declare function exports<T1:string|boolean|Object,T2>(value: T1, default: T2): T1; }
declare module 'lodash/defaultTo' { declare function exports<T1:number,T2>(value: T1, default: T2): T1|T2; }
declare module 'lodash/defaultTo' { declare function exports<T1:void|null,T2>(value: T1, default: T2): T2; }
// declare module 'lodash/flow' { declare function exports(...funcs?: Array<Function>): Function; }
declare module 'lodash/flow' { declare function exports(funcs?: Array<Function>): Function; }
// declare module 'lodash/flowRight' { declare function exports(...funcs?: Array<Function>): Function; }
declare module 'lodash/flowRight' { declare function exports(funcs?: Array<Function>): Function; }
declare module 'lodash/identity' { declare function exports<T>(value: T): T; }
declare module 'lodash/iteratee' { declare function exports(func?: any): Function; }
declare module 'lodash/matches' { declare function exports(source: Object): Function; }
declare module 'lodash/matchesProperty' { declare function exports(path?: ?Array<string>|string, srcValue: any): Function; }
declare module 'lodash/method' { declare function exports(path?: ?Array<string>|string, ...args?: Array<any>): Function; }
declare module 'lodash/methodOf' { declare function exports(object?: ?Object, ...args?: Array<any>): Function; }
declare module 'lodash/mixin' { declare function exports<T: Function|Object>(object?: T, source: Object, options?: { chain: bool }): T; }
declare module 'lodash/noop' { declare function exports(): void; }
declare module 'lodash/nthArg' { declare function exports(n?: number): Function; }
declare module 'lodash/over' { declare function exports(...iteratees: Array<Function>): Function; }
declare module 'lodash/over' { declare function exports(iteratees: Array<Function>): Function; }
declare module 'lodash/overEvery' { declare function exports(...predicates: Array<Function>): Function; }
declare module 'lodash/overEvery' { declare function exports(predicates: Array<Function>): Function; }
declare module 'lodash/overSome' { declare function exports(...predicates: Array<Function>): Function; }
declare module 'lodash/overSome' { declare function exports(predicates: Array<Function>): Function; }
declare module 'lodash/property' { declare function exports(path?: ?Array<string>|string): Function; }
declare module 'lodash/propertyOf' { declare function exports(object?: ?Object): Function; }
declare module 'lodash/range' { declare function exports(start: number, end: number, step?: number): Array<number>; }
declare module 'lodash/range' { declare function exports(end: number, step?: number): Array<number>; }
declare module 'lodash/rangeRight' { declare function exports(start: number, end: number, step?: number): Array<number>; }
declare module 'lodash/rangeRight' { declare function exports(end: number, step?: number): Array<number>; }
declare module 'lodash/runInContext' { declare function exports(context?: Object): Function; }
declare module 'lodash/stubArray' { declare function exports(): Array<*>; }
declare module 'lodash/stubFalse' { declare function exports(): false; }
declare module 'lodash/stubObject' { declare function exports(): {}; }
declare module 'lodash/stubString' { declare function exports(): ''; }
declare module 'lodash/stubTrue' { declare function exports(): true; }
declare module 'lodash/times' { declare function exports(n: number, iteratee?: Function): Function; }
declare module 'lodash/toPath' { declare function exports(value: any): Array<string>; }
declare module 'lodash/uniqueId' { declare function exports(prefix?: string): string; }
