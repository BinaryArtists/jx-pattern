export class Service {
  opt: any;

  constructor(opts) {
    this.opt = opts;
  }

  name(): string {
    return 'default';
  }

  available(): boolean {
    return false;
  }

  config(params: object): void {
    for (let prop in params) {
      this[prop] = params[prop];
    }
  }

  /**
   *
   * @param param.type 'pv' 页面浏览, 'ck' 点击事件, 'expo' 曝光, 'ev' 通用事件
   * @param param.url 页面route
   * @param param.uid 事件handler/eventname，曝光selector
   */
  log({ type, url, uid, extra }) {}

  static install(obj: any, options: any): void {
    // Not obj.prototype.$service
    obj.$service = new Service(options);
  }
}
