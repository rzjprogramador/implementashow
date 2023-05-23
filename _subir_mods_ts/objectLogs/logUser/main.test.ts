import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { fakeLogUserOK } from "../../../global/literals/fakes/fake_logs/fakeLogs.ts";
import {  logUserRepositoryMock } from "./mock/repository.ts";
import { ILogPerson } from "./contracts.ts";

const input: ILogPerson = {
  atividade: fakeLogUserOK.atividade,
  author: fakeLogUserOK.author,
  data: fakeLogUserOK.data,
};

const sut = logUserRepositoryMock;
const runSuites_CleanItemsLogUser = () => sut.items = [];

Deno.test("deve retornar  boleano de LogUser gerado", () => {
  const actual = sut.create(input);
  const assertion = true;

  expect(actual).toEqual(assertion);
  runSuites_CleanItemsLogUser();
});

// Deno.test("[ todo ]deve retornar  boleano FALSO e nao geracao do LogUser", () => {
//   const inputFAIL = {
//     atividade: undefined,
//     author: '0',
//     data: fakeLogUserOK.data,
//   };
//   const actual = sut.create(inputFAIL);
//   const assertion = false;

//   expect(actual).toEqual(assertion);
//   runSuites_CleanItemsLogUser();
// });

Deno.test("deve retornar a quantidade de items na colecao de LogUser", () => {
  // necessario para zerar o criado no controller
  runSuites_CleanItemsLogUser();
  sut.create(input);
  const actual = sut?.items?.length;
  const assertion = 1;

  expect(actual).toEqual(assertion);
  runSuites_CleanItemsLogUser();
});

/* TESTER_CONSOLE ************************************* */

function show_LogUser() {
  console.log(sut.create(input));
  console.log(sut.list());
  console.log(sut?.items?.length);

  // Limpar os items do LogUser
  runSuites_CleanItemsLogUser();
}
show_LogUser();

export default 1;
