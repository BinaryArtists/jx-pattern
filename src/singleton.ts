export default class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static sharedInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
