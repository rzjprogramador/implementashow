// deno-lint-ignore-file no-prototype-builtins
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log } from '@remotes'
import {
  ArgsClienteFisico, fakeBaseOkArgsClienteFisicoONE, factoryClienteFisico, membersClienteFisico
} from '@clienteFisico'

const sut = factoryClienteFisico
const inputSutFakeBaseOK: ArgsClienteFisico = fakeBaseOkArgsClienteFisicoONE

Deno.test({
  name: "[ Ok.Args ] deve conter as props com os valores.",
  only: false,
  async fn() {
    const action = await sut(inputSutFakeBaseOK);
    // Log('  >>>>>>> ', action)
    expect(action.primeiroNome).toBe('any');
  },

});

Deno.test({
  name: "[ membroDeEscrita ] deve conter no prototype o membro de escrita nomeCompleto().",
  only: false,
  async fn() {
    const input1: ArgsClienteFisico = { ...inputSutFakeBaseOK, primeiroNome: 'Jon', sobrenome: 'Doe' }
    const instance1 = await sut(input1);

    expect(instance1.nomeCompleto()).toBe('Jon Doe');
  },

});

Deno.test({
  name: "[ prototype ] deve conter os membros no seu prototype.",
  only: false,
  async fn() {
    const input1: ArgsClienteFisico = { ...inputSutFakeBaseOK, primeiroNome: 'Jon', sobrenome: 'Doe' }
    const input2: ArgsClienteFisico = { ...inputSutFakeBaseOK, primeiroNome: 'Joao', sobrenome: 'Any' }
    const instance1 = await sut(input1);
    const instance2 = await sut(input2);

    // prototype: os metodos devem apontar para o mesmo lugar na memoria.
    const testerPrototypeUniqueMemory = instance1.nomeCompleto === instance2.nomeCompleto

    // prototype: a instancia criada tem no seu prototype os membros gerados no gerador de MembrosProto
    const isProtoClienteFisico = membersClienteFisico.isPrototypeOf(instance1)

    expect(instance1.nomeCompleto()).toBe('Jon Doe');
    expect(instance2.nomeCompleto()).toBe('Joao Any');
    expect(testerPrototypeUniqueMemory).toEqual(true);
    expect(isProtoClienteFisico).toEqual(true);
  },

});

// Deno.test({
//   name: "[ OK.members ] deve conter o membro { showIdade () } herdado na entidade final.",
//   only: false,
//   async fn() {
//     const where = await sut(inputSutFakeBaseOK);
//     Log('RESULT MEMBRO SHOW IDADE() >>>>> ', where.showIdade())
//     expect(where.showIdade).toBeDefined()
//     expect(where.showIdade).toBeInstanceOf(Function)
//     expect(typeof where.showIdade == 'function').toBeTruthy()
//   },

// });

// // /* TESTER_CONSOLE ************************************* */

async function show_Member_NomeCompleto() {
  const input: ArgsClienteFisico = { ...inputSutFakeBaseOK, primeiroNome: 'Jon', sobrenome: 'Doe' }
  const action = await sut(input);
  console.log(action)
  console.log('NOME COMPLETO >>>>>>>>> ', action.nomeCompleto())
}
// show_Member_NomeCompleto()

export default 1;
