// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createPrototypeUserFisico } from "../createPrototype.ts";
import { fakeListUserFisicoArgsOK } from "../../../../data/user_fisico/fake.ts";

const Log = (d: any) => console.log(d);

const sut = createPrototypeUserFisico;

Deno.test("deve retornar a criacao do prototipo user_fisico  fakeOK", () => {
  const input = fakeListUserFisicoArgsOK[0];
  const actual = sut(input);

  console.log(actual);

  expect(true);
});

/* TESTER_CONSOLE ************************************* */

function showFoo() {
  const input = fakeListUserFisicoArgsOK[0];
  const actual = sut(input);

  actual.then((d) => console.log(d));
}
showFoo();

export default 1;
