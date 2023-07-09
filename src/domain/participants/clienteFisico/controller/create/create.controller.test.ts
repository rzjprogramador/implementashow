// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoController, fakeBaseOkArgsClienteFisicoONE, seedClienteFisicoONE } from "@clienteFisico";
import { ExceptionsMessages } from "@replicasLocalGlobal"
import {
  ok, badRequest,
  setSystem,
  type HttpResponse,
} from '@replicasLocalGlobal'

const sut = CreateClienteFisicoController
const argFakeONE = fakeBaseOkArgsClienteFisicoONE
const argSeedONE = seedClienteFisicoONE

Deno.test("[ deve retornar feedback faça outra ação de conter a prop. ID { #investigacaoJaExiste }", async () => {
  const input = { ...argFakeONE, ID: setSystem.Strings.one }
  const action = await sut.execute(input);
  const assertion: any = await badRequest(ExceptionsMessages.feedbackExistID())

  expect(action).toEqual(assertion);
});

Deno.test("[ deve retornar feedback de erro em validacao tamanho do texto. { #validacaoCampos }", async () => {
  const input = { ...argFakeONE, ID: setSystem.Strings.one }
  const action = await sut.execute(input);
  const assertion: any = await badRequest(ExceptionsMessages.feedbackExistID())

  expect(action).toEqual(assertion);
});

// Ops... as letras não podem ser menor que

/* TESTER_CONSOLE ************************************* */

// sut.execute(argSeedONE).catch((d) => console.log(d))

export default 1;