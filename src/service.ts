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

  static install(obj: any, options: any): void {
    // Not obj.prototype.$service
    obj.$service = new Service(options);
  }
}
