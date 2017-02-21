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

const pause = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export async function doSomethingAsync() {
  await pause(250);
  return 'hello';
}
