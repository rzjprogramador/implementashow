// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { makerFactoryClienteFisico } from "./factory.ts";
import { ClienteFisicoRequest } from "@clienteFisico";


const sut = makerFactoryClienteFisico

const fakeArgSut: ClienteFisicoRequest = {
  primeiroNome: 'any',
  sobrenome: 'foobar',
  anoNascimento: 1970,
}

Deno.test({
  name: "[ OK ] deve retornar a existencia de todos os campos da entidade.",
  only: false,
  async fn() {
    const input = fakeArgSut;
    const action = await sut(input);
    expect(action).toHaveProperty('ID');
    expect(action.args).toHaveProperty('primeiroNome');
    expect(action.args).toHaveProperty('sobrenome');
    expect(action.args).toHaveProperty('idade');
    expect(action.args).toHaveProperty('anoNascimento');
    expect(action.args).toHaveProperty('nomeCompleto');
  },

});

/* -- TESTER_CONSOLE -- ************************************ */

async function tester_Ok_Propertys() {
  const action = await sut(fakeArgSut);
  console.log(action)
}
// tester_Ok_Propertys();

export default 1;

