export * from "./utils";

export class HelloWorld {
  public readonly foo: string;

  constructor(foo: string) {
    this.foo = foo;
  }

  public getMessage() {
    return `Hello, this is ${this.foo}`;
  }
}
