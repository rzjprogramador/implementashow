// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { literalListClienteFisicoArgsOK } from "../../../../../../../data/unique/clienteFisico/literals/literals.ts";
import { featExistClienteFisico } from "./exist.ts";
import { seedClienteFisico } from "../../../../../../../data/unique/clienteFisico/seed/seed.ts";
import { feedbacks } from "../../../../../../../app/dataApp/literals/feedbacks/feedbacks.ts";

const sut = await featExistClienteFisico;
const inputOK = literalListClienteFisicoArgsOK[0];
const inputFAIL = seedClienteFisico?.one;

const fnExistOK = async () => {
  await sut(inputOK);
  // vai retornar undefined
};

// TODO: O FAIL NAO VOU CONSEGUIR FAZER AQUI PORQUE ESTOU TESTANDO O REPO SEM NADA SALVO NELE POR ISTO NAO ESTOURA O ERRO.

// const fnExistFAIL = async () => {
//   try {
//     return await sut(inputFAIL);
//   } catch (err: any) {
//     return await err.message.toString();
//   }
// };

Deno.test("deve retornar [undefined] se nao existe o item na colecao, mesmo recebendo um input de args.", async () => {
  const res = await fnExistOK();
  const assertion = undefined;

  expect(res).toEqual(assertion);
});

// Deno.test("deve retornar o erro com feddback de ja cadastrado ao passar item que ja existe", async () => {
//   // expect(await fnExistFAIL()).toBeFalsy();
//   expect(await fnExistFAIL()).toEqual(Error(feedbacks.alreadyExists));
// });

/* TESTER_CONSOLE ************************************* */

async function show_existClienteFisicoOK() {
  const res = await sut?.(inputOK);
  console.log('RESPOSTA DO OBJ AQUI >> ', res)
}
show_existClienteFisicoOK();

// async function show_existClienteFisicoFAIL() {
//   console.log(
//     "TEM QUE VOLTAR O FEED DE ERRO >>> ",
//     await fnExistFAIL(),
//   );
// }
// show_existClienteFisicoFAIL(); // ok ta voltando o feed de erro.

export default 1;
