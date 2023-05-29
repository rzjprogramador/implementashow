// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { literalListClienteFisicoArgsOK } from "../../../../../../../data/unique/clienteFisico/literals/literals.ts";
import { featExistClienteFisico } from "./exist.ts";
import { seedClienteFisico } from "../../../../../../../data/unique/clienteFisico/seed/seed.ts";

const sut = await featExistClienteFisico;
const inputOK = literalListClienteFisicoArgsOK[0];

const fnExistOK = async () => {
  await sut(inputOK);
};
// vai retornar undefined

// Deno.test("deve retornar [undefined] se nao existe o item na colecao, mesmo recebendo um input de args.", async () => {
//   const res = await fnExistOK();
//   const assertion = undefined;

//   expect(res).toEqual(assertion);
// });
Deno.test({
  name: "deve retornar ",
  only: false,
  async fn() {
    // test complicated stuff here
    const where = await fnExistOK();
    const assertion = undefined;
    expect(where).toEqual(assertion);
  },
  // obs: PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
});

/* TESTER_CONSOLE ************************************* */

// async function show_existClienteFisicoOK() {
//   const res = await sut?.(inputOK);
//   console.log("RESPOSTA DO OBJ AQUI >> ", res);
// }
// show_existClienteFisicoOK();

export default 1;
