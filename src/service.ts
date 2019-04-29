export class Service {
  named(): string {
    return '';
  }

  depends(): [Service] {
    return [new Service()];
  }

  config(): void {}
}
