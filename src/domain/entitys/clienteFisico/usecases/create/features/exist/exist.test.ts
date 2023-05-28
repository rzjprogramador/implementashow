// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { literalListClienteFisicoArgsOK } from "../../../../../../../data/unique/clienteFisico/literals/literals.ts";
import { featExistClienteFisico } from "./exist.ts";
import { seedClienteFisico } from "../../../../../../../data/unique/clienteFisico/seed/seed.ts";
import { clienteFisicoRepositoryMockWithOneSeed } from "../../../../../../../data/unique/clienteFisico/mocks/repository.ts";
import { feedbacks } from "../../../../../../../app/dataApp/literals/feedbacks/feedbacks.ts";

const sut = await featExistClienteFisico;
const stubInputNotExistOK = literalListClienteFisicoArgsOK[0];
const stubInputExistFAIL = seedClienteFisico?.one;

const fnExistOK = async () => {
  return await sut(stubInputNotExistOK);
};

const fnExistFAIL = async () => {
  try {
    return await sut(stubInputExistFAIL);
  } catch (err: any) {
    return await err.message;
  }
};

Deno.test("deve retornar undefined se nao existe o item na colecao, mesmo recebendo um input de args.", async () => {
  const res = await sut?.(stubInputNotExistOK);
  const assertion = await fnExistOK();

  expect(res).toEqual(assertion);
});

Deno.test("deve retornar o feddback de ja cadastrado ao passar item que ja existe", async () => {
  // expect(await fnExistFAIL()).toBeFalsy();
  expect(await fnExistFAIL()).toEqual(Error(feedbacks.alreadyExists));
});

/* TESTER_CONSOLE ************************************* */

async function show_existClienteFisicoOK() {
  console.log(
    "NAO EXISTE ENTAO AQUI ESTA VOLTANDO O ITEM >>>>>> ",
    await fnExistOK(),
  );
}
show_existClienteFisicoOK(); // todo: nao esta voltando o item

async function show_existClienteFisicoFAIL() {
  console.log(
    "EXISTE ENTAO ESTA VOLTANDO O FEED DE ERRO >>> ",
    await fnExistFAIL(),
  );
}
show_existClienteFisicoFAIL(); // ok ta voltando o feed de erro.

export default 1;
