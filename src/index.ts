export * from './utils';

export class HelloWorld {
  readonly foo: string;

  constructor(foo: string) {
    this.foo = foo;
  }

  getMessage() {
    return `Hello, this is ${this.foo}`;
  }
}
