import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { LogPersonModel, LogUserType } from "./contracts.ts";
import { createLogUser } from "./main.ts";
import { fakeLogUserOK } from "../../../src/data/unique/literals/fakes/fake_logs/fakeLogs.ts";

const input: LogPersonModel = fakeLogUserOK;

// Mock
export const repositoryLogUserMock: LogUserType = {
  items: [],

  create(props: LogPersonModel) {
    if (props) {
      this?.items?.push(props)!;
      return true;
    } else {
      return false;
    }
  },

  list() {
    return this?.items!;
  },
};

// SUT
const sut = createLogUser;

const beforeTests = () => repositoryLogUserMock.items = [];

Deno.test("...", () => {
  // const actual = sut(input);
  // const assertion = true;

  expect(true);
  beforeTests();
});

Deno.test("testando repo mock", () => {
  const actual = repositoryLogUserMock.create(input);
  const assertion = true;

  expect(actual).toEqual(assertion);
  beforeTests();
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
  beforeTests();
  repositoryLogUserMock.create(input);
  const actual = repositoryLogUserMock?.items?.length;
  const assertion = 1;

  expect(actual).toEqual(assertion);
  beforeTests();
});

/* TESTER_CONSOLE ************************************* */

// function show_RepoMockLogUser() {
//   console.log(sutRepositoryMock.create(input));
//   console.log(sutRepositoryMock.list());
//   console.log(sutRepositoryMock?.items?.length);

//   // Limpar os items do LogUser
//   runSuites_CleanItemsLogUser();
// }
// show_RepoMockLogUser();

function show_SUT() {
  const actual = sut(input);
  console.log(actual);

  // Limpar os items do LogUser
  beforeTests();
}
show_SUT();

export default 1;
