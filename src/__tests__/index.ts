import test from "ava";
import HelloWorld from "..";

test("hello world", t => {
  const thing = new HelloWorld("neat");

  t.is(thing.getMessage(), "Hello, this is neat");
});
