// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log, ArgsClienteFisico, factoryClienteFisico, fakesArgsClienteFisico } from './../mod.ts'

const sut = factoryClienteFisico
const inputSutOk_one: ArgsClienteFisico = fakesArgsClienteFisico.OK.one

Deno.test({
  name: "[ Ok.Args ] deve retornar os mesmos argumentos que receber.",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    Log('  >>>>>>> ', where)
    expect(where).toEqual(inputSutOk_one);
  },

});

Deno.test({
  name: "[ OK.members ] deve conter o membro { showIdade () } herdado na entidade final.",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    expect(await where.showIdade).not.toBeDefined()
    // TODO: SHOW IDADE - o membro sai undefined no console.
  },

});

// /* TESTER_CONSOLE ************************************* */

// viewConsole : tester_Show_CreateEntityArgs
// sut(inputSutOk_one).then((d: any) => Log(d))

async function show() {
  const instance1 = await sut(inputSutOk_one)
  instance1.primeiroNome = 'foooooooo'
  // TODO NAO DEVERIA SER POSSIVEL - MAS ESTA SENDO PORQUE AS PROPS ESTAO PUBLICAS
  Log(instance1)
}
// show()

export default 1;
