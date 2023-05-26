// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createNewClienteFisicoFactory } from "./generatorPrototype.ts";
import { literalListClienteFisicoArgsOK } from "../../../../../../data/unique/clienteFisico/literals/literals.ts";
import { ClienteFisicoArgs } from "../../../contracts.ts";

type ClienteFisicoUseFactory = { args: ClienteFisicoArgs };

const sut = createNewClienteFisicoFactory;
const stubInput = literalListClienteFisicoArgsOK[0];

Deno.test("deve retornar a fabricacao do objeto da entidade clienteFisico", () => {
  const instance1 = sut(stubInput)
  const actual = stubInput;

  console.log(instance1)

  expect(instance1).toEqual(actual);
});

/* TESTER_CONSOLE ************************************* */

function showFoo() {
  const instance1 = sut(stubInput);
  // const instanceArg = instance1.args;

  console.log(instance1);
  console.log(instance1?.showIdade?.()!);
}
showFoo();

export default 1;
