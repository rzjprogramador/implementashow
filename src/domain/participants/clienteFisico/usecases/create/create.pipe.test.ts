import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log } from "@replicasRemote";
import { pipeCaseCreateClienteFisico, fakesArgsClienteFisico } from "@clienteFisico";


const sut = pipeCaseCreateClienteFisico
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

async function tester_() {
  // const instance1 = await sut(inputSut.OK.one)
  // console.log(instance1)
  // console.log(instance1.ID)
  // console.log('ACESSANDO MEBRO >>>>>>>', instance1?.showIdade)
  // sut(inputSut.OK.one).then((d: any) => Log(d.showIdade))
}
tester_();

/*
* PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
*/

export default 1;
