import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log, ArgsClienteFisico, makerFactoryClienteFisico, fakesArgsClienteFisico } from './../mod.ts'

const sut = makerFactoryClienteFisico
const inputSutOk_one: ArgsClienteFisico = fakesArgsClienteFisico.OK.one

Deno.test({
  name: "[ Ok.Args ] deve conter as props com os valores.",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    Log('  >>>>>>> ', where)
    expect(where.args.primeiroNome).toBe('onename');
  },

});

Deno.test({
  name: "[ OK.members ] deve conter o membro { showIdade () } herdado na entidade final.",
  only: false,
  async fn() {
    const where = await sut(inputSutOk_one);
    Log('RESULT MEMBRO SHOW IDADE() >>>>> ', where.showIdade())
    expect(where.showIdade).toBeDefined()
    expect(where.showIdade).toBeInstanceOf(Function)
    expect(typeof where.showIdade == 'function').toBeTruthy()
  },

});

// /* TESTER_CONSOLE ************************************* */

// viewConsole : tester_Show_CreateEntityArgs
// sut(inputSutOk_one).then((d: any) => Log(d))

async function show() {
  // const instance1 = await sut(inputSutOk_one)
  // instance1.primeiroNome = 'foooooooo'
  // TODO NAO DEVERIA SER POSSIVEL - MAS ESTA SENDO PORQUE AS PROPS ESTAO PUBLICAS
  // Log(instance1)
}
// show()

export default 1;
