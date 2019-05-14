interface ServiceOptions {
  enableLogging: Boolean;
  cfgfile: any;
}

export class Service {
  running: Boolean;
  opt: any;

  constructor(opts: ServiceOptions) {
    this.opt = opts;
  }

  name(): String {
    return 'default';
  }

  available(): Boolean {
    return false;
  }

  config(params: Object): void {
    for (let prop in params) {
      this[prop] = params[prop];
    }
  }

  static install(obj: any, options: any): void {
    // Not obj.prototype.$service
    obj.$service = new Service(options);
  }

  /**
   * @desc 服务依赖
   */
  depends(): Array<String> {
    return [];
  }

  /**
   * @desc 返回promise，表示初始化完成
   */
  ready() {}

  /**
   * @desc 返回signal，表示数据更新
   */
  changed() {}

  /**
   * @desc 服务是否在运行
   */
  isRunning() {
    return this.running;
  }

  /**
   * 服务热启动
   */
  powerOn() {
    this.running = true;
  }

  /**
   * 服务热关闭
   */
  powerOff() {
    this.running = false;
  }
}
