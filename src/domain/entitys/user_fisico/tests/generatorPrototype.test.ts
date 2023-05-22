// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { generatorProtoUserFisico } from "../usecases/create/pipe/generatorPrototype.ts";
import { fakeListUserFisicoArgsOK } from "../../../../data/literals/user_fisico/fake/fake.ts";

const Log = (d: any) => console.log(d);

const sut = generatorProtoUserFisico;

Deno.test("deve retornar a criacao do prototipo user_fisico  fakeOK", async () => {
  const input = fakeListUserFisicoArgsOK[0];
  const actual = await sut(input);

  // console.log(actual);

  expect(actual).toEqual(input);
  expect(actual).toHaveProperty("primeiroNome");
});

/* TESTER_CONSOLE ************************************* */

function showFoo() {
  const input = fakeListUserFisicoArgsOK[0];
  console.log(sut(input));
}
showFoo();

export default 1;
