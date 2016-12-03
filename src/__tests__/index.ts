import { HelloWorld } from "..";

test("hello world", () => {
  const thing = new HelloWorld("neat");

  expect(thing.getMessage()).toBe("Hello, this is neat");
});
