// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { seedClienteFisico } from "../../../../../../../data/unique/clienteFisico/seed/seed.ts";
import { Log } from "../../../../../../../app/dataApp/imports/mod_deps.ts";
import { feedbacks } from "../../../../../../../app/dataApp/literals/feedbacks/feedbacks.ts";
import { ArgExistClienteFisico, ClienteFisicoModel } from "../../../../contracts.ts";


const inputWithIDMockOK: Partial<ClienteFisicoModel> = {
  ID: seedClienteFisico?.one,
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
};

const inputWithoutIDMockFAIL: Partial<ClienteFisicoModel> = {
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
};

const repository_WithoutITEM_MockOK = {
  items: [],

  async exist(m: Partial<ClienteFisicoModel>) {
    return await this?.items?.find((m: Partial<ClienteFisicoModel>) => m.ID === m.ID);
  },
};

const repository_WithITEM_MockFAIL = {
  items: [inputWithIDMockOK, ],

  async exist(m: Partial<ClienteFisicoModel>) {
    return await this?.items?.find((m: Partial<ClienteFisicoModel>) => m?.ID === m.ID);
  },
};


const featExistClienteFisicoMockOK = async (m: ArgExistClienteFisico) => {

  const operation = await repository_WithoutITEM_MockOK?.exist(m)
  if(typeof operation == 'undefined') {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacks.alreadyExists)
  }
}

const sut = featExistClienteFisicoMockOK


// Deno.test("deve retornar [undefined] se nao existe o item na colecao, mesmo recebendo um input de args.", async () => {
//   const res = await fnExistOK();
//   const assertion = undefined;

//   expect(res).toEqual(assertion);
// });

Deno.test({
  name: "deve retornar o argumento passado, para seguir o fluxo do pipe >> porque deu TRUE o item nao existe ainda",
  only: true,
  async fn() {
    // test
    const input = inputWithIDMockOK.ID
    const where = await sut(input);
  Log("RETORNE O ARG  >> ", where);
  expect(where).toEqual(input)

  },

});

/* TESTER_CONSOLE ************************************* */

async function show_existClienteFisicoOK() {
  const res = await sut(inputWithIDMockOK.ID);
  Log("AQUI OK ESTA RETORNANDO O ARGUMENTO >> ", res);
}
// show_existClienteFisicoOK();

export default 1;
