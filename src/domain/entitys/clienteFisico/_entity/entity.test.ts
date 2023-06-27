// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { IClienteFisicoArgs, Log, clienteFisicoEntity, fakesArgsClienteFisico } from './mod.ts'


const sut = clienteFisicoEntity
const inputSutOk_one: IClienteFisicoArgs = fakesArgsClienteFisico.OK.one

Deno.test({
  name: "deve retornar ->  && .",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    Log('  >>>>>>> ', where)
    expect(where).toEqual(inputSutOk_one);
  },

});

// /* TESTER_CONSOLE ************************************* */

// async function tester_() {
//   const res = await sut(inputSut);
//   res.then(d => Log(d))
//   // res.then(d => Log(d))
// }
// tester_();

/*
* PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
*/

export default 1;
