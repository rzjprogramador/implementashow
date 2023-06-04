// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { mkeLog } from "../../../../../../../topLevel/deps/_rootDeps.deps.ts";
import {
  fakerListClienteFisicoArgsOK,
  newClienteFisicoFactory,
} from "../../../../../../../topLevel/deps/_rootDeps.deps.ts";

const sut = newClienteFisicoFactory;
const stubInput = fakerListClienteFisicoArgsOK[0];

Deno.test("deve retornar o objeto  factory de clienteFisico", () => {
  const instance1 = sut(stubInput);
  const actual = stubInput;
  // mkeLog("INSTANCIA DA FACTORY CRIADA >> ", instance1);

  expect(instance1).toEqual(actual);
});

/* TESTER_CONSOLE ************************************* */

function show_factoryClienteFisico() {
  const instance1 = sut(stubInput);
  mkeLog(instance1);
  // mkeLog(instance1?.showIdade?.()!);
  // TODO: NO OBJETO FINAL NAO APARECE O showIdade() ESTA DANDO UNDEFINED
}
// show_factoryClienteFisico();

export default 1;
