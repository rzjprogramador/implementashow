// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoController, fakeBaseOkArgsClienteFisicoONE, seedClienteFisicoONE } from "@clienteFisico";
import { ExceptionsMessages } from "@globalEntitys"
import { ok, badRequest, setSystem, type HttpResponse } from '@globalEntitys'

const sut = CreateClienteFisicoController
const argFakeONE = fakeBaseOkArgsClienteFisicoONE
const argSeedONE = seedClienteFisicoONE

Deno.test("[ deve retornar feedback faça outra ação se nos args conter a prop. ID { #investigacaoJaExiste }", async () => {
  const input = { ...argFakeONE, ID: setSystem.Strings.one }
  const action = await sut.execute(input);
  const assertion: any = await badRequest(ExceptionsMessages.feedbackExistID())

  expect(action).toEqual(assertion);
});

Deno.test("{ #validacaoCampo: Firstname } deve retornar feedback correto com o campo testado, conforme a configuracao definida.", async () => {
  const input = { ...argFakeONE, primeiroNome: 'f' }
  const action = await sut.execute(input);
  // console.log('RESPOSTA >>>>> ', action)
  const assertion = {
    cause: `Ops... as letras não podem ser menor que 2`,
  }

  expect(action?.data).toEqual(assertion);
});


/* TESTER_CONSOLE ************************************* */

// sut.execute({ ...argFakeONE, primeiroNome: 'f' }).then((d) => console.log(d))

export default 1;