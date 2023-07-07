// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  CreateClienteFisicoController,
  fakeBaseOkArgsClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";


const sut = CreateClienteFisicoController
const inputBaseOK: ArgsClienteFisico = fakeBaseOkArgsClienteFisico

Deno.test({
  name: "deve retornar ->  && .",
  only: false,
  async fn() {
    // TODO

    // const action = await sut.execute()

    expect(true);
  },

});

/*
TODO :
-- FAZER O TEST CONTROLLER - E ANTES PERSISTIR A FACTORY CRIADA
-- DEPOIS DE VALIDAR TODOS CAMPOS
-- USAR SETS NO OBJECTVALUES E ONDE ELES ESTAO SENOD USADOS.
*/

/* TESTER_CONSOLE ************************************* */

async function tester_OK() {
  const input = { ...inputBaseOK }
  return await sut.execute(input);
}
tester_OK().then((d) => console.log(d))

async function tester_FAIL() {
  const input = { ...inputBaseOK, primeiroNome: 'f' }
  return await sut.execute(input);
}
// tester_FAIL().then((d) => console.log(d))



/*

*/

export default 1;