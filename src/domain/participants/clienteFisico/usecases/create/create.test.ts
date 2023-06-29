import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { usecaseCreateClienteFisico } from "./create.ts";
import { fakesArgsClienteFisico } from "../../_core/mod.ts";


const sut = usecaseCreateClienteFisico
const inputSut = fakesArgsClienteFisico

Deno.test({
  name: "deve retornar ->  && .",
  only: false,
  async fn() {
    // const input = inputSut;
    // const where = await sut(input);
    // const assertion = undefined;
    // Log('  >>>>>>> ', where)
    // expect(where).toEqual(assertion);
  },

});


/* TESTER_CONSOLE ************************************* */

function tester_() {
  const instance1 = sut(inputSut.OK.one)
  console.log(instance1)
  console.log(instance1.ID)
  console.log('ACESSANDO MEBRO >>>>>>>', instance1?.showIdade)
}
tester_();

/*
* PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
*/

export default 1;
