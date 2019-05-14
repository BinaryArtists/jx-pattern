/**
 * @module Asyncable类
 * @desc 用作async/await中的阻塞与同志
 */
export class Asyncable {
  static __def_str: string = '...';
  _promise: Promise<string>;
  _resolve: Function;
  _reject: Function;

  constructor(resolved: Boolean = false) {
    if (resolved) {
      this._promise = Promise.resolve(Asyncable.__def_str);
    }
  }

  /**
   * 函数会被其他对象调用，所以这里不可使用this!!!!!!!!!!!!!
   *
   * @param resolve
   * @param reject
   */
  _executor(resolve: Function, reject: Function) {
    this._resolve = resolve;
    this._reject = reject;
  }

  /**
   * @return Promise对象
   */
  promisely() {
    if (!this._promise) {
      this._promise = new Promise(this._executor);
    }
    return this._promise;
  }

  then(msg: String = Asyncable.__def_str) {
    this._resolve(msg);
  }

  fail(msg: string = Asyncable.__def_str) {
    this._reject(new Error(msg));
  }
}
