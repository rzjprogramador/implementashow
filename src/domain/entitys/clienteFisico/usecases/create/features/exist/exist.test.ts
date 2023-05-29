// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { featExistClienteFisico } from "./exist.ts";
import { seedClienteFisico } from "../../../../../../../data/unique/clienteFisico/seed/seed.ts";
import { ClienteFisicoModel } from "../../../../contracts.ts";
import { Log } from "../../../../../../../app/dataApp/imports/mod_deps.ts";

const sut = await featExistClienteFisico;

const inputWithIDMockOK: Partial<ClienteFisicoModel> = {
  ID: seedClienteFisico?.one,
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
};

const inputWithoutIDMockFAIL: Partial<ClienteFisicoModel> = {
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
};


// Deno.test("deve retornar [undefined] se nao existe o item na colecao, mesmo recebendo um input de args.", async () => {
//   const res = await fnExistOK();
//   const assertion = undefined;

//   expect(res).toEqual(assertion);
// });
Deno.test({
  name: "deve retornar ",
  only: true,
  async fn() {
    // test

  },

});

/* TESTER_CONSOLE ************************************* */

async function show_existClienteFisicoOK() {
  const res = await sut(inputWithIDMockOK.ID);
  
  Log("AQUI >> ", res);
}
show_existClienteFisicoOK();

export default 1;
