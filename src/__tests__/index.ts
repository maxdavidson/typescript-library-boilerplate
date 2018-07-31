import { doSomethingAsync, HelloWorld } from '..';

test('hello world', () => {
  const thing = new HelloWorld('neat');
  expect(thing.getMessage()).toBe('Hello, this is neat');
});

test('async', async () => {
  const result = await doSomethingAsync();
  expect(result).toBe('hello');
});
