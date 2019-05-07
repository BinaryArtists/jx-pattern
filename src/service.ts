export default class Service {
  constructor() {}

  name(): string {
    return 'default';
  }

  available(): boolean {
    return false;
  }

  config(): void {}

  static install(Obj, options): void {}
}
