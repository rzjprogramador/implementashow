// deno-lint-ignore-file no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { IClienteFisicoArgs, Log, factoryClienteFisico, fakesArgsClienteFisico } from './../mod.ts'

const sut = factoryClienteFisico
const inputSutOk_one: IClienteFisicoArgs = fakesArgsClienteFisico.OK.one

Deno.test({
  name: "[ Ok.Args ] deve retornar os mesmos argumentos que receber.",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    // Log('  >>>>>>> ', where)
    expect(where).toEqual(inputSutOk_one);
    // TODO: SHOW IDADE
  },

});

Deno.test({
  name: "[ OK.members ] deve conter o membro { showIdade () } herdado na entidade final.",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    // Log('  >>>>>>> ', where)
    // expect(where).toHaveProperty('showIdade');
    // TODO: SHOW IDADE
  },

});

// /* TESTER_CONSOLE ************************************* */

// viewConsole : tester_Show_CreateEntityArgs
// sut(inputSutOk_one).then((d: any) => Log(d))


export default 1;
