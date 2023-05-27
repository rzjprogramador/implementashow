// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { newClienteFisicoFactory } from "./factory.ts";
import { literalListClienteFisicoArgsOK } from "../../../../../../../data/unique/clienteFisico/literals/literals.ts";

const sut = newClienteFisicoFactory;
const stubInput = literalListClienteFisicoArgsOK[0];

Deno.test("deve retornar o objeto  factory de clienteFisico", () => {
  const instance1 = sut(stubInput);
  const actual = stubInput;
  console.log("INSTANCIA DA FACTORY CRIADA >> ", instance1);

  expect(instance1).toEqual(actual);
});

/* TESTER_CONSOLE ************************************* */

function show_factoryClienteFisico() {
  const instance1 = sut(stubInput);
  console.log(instance1);
  // console.log(instance1?.showIdade?.()!);
  // TODO: NO OBJETO FINAL NAO APARECE O showIdade() ESTA DANDO UNDEFINED
}
show_factoryClienteFisico();

export default 1;
