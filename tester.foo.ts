// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

const Log = (d: any) => console.log(d);

const sut = (d: any) => d

Deno.test("[ deve retornar ", () => {
  const input = "foo";
  const actual = sut(input);
  const assertion: any = "foo";
  // RESULT >>>>>>>>>>>>  ", actual);

  expect(actual).toEqual(assertion);
});

/* TESTER_CONSOLE ************************************* */

function show_ () {
  const input = "foo"
  const res = sut(input);

  console.log(res);
}
show_ ();

export default 1;
