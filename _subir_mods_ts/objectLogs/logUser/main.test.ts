import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { fakeLogUserOK } from "../../../global/literals/fakes/fake_logs/fakeLogs.ts";
import { ILogPerson, LogUserType } from "./contracts.ts";
import { makeLogUser } from "./main.ts";

const input: ILogPerson = fakeLogUserOK;

// Mock
export const logUserRepositoryMock: LogUserType = {
  items: [],

  create(props: ILogPerson) {
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
const sut = makeLogUser;

const sutRepositoryMock = logUserRepositoryMock;
const beforeTests = () => sutRepositoryMock.items = [];

Deno.test("...", () => {
  const actual = sut(input);
  // const assertion = true;

  expect(true);
  beforeTests();
});

Deno.test("testando repo mock", () => {
  const actual = sutRepositoryMock.create(input);
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
  sutRepositoryMock.create(input);
  const actual = sutRepositoryMock?.items?.length;
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
  const actual = sut(input)
  console.log(actual)

  // Limpar os items do LogUser
  beforeTests();
}
show_SUT();

export default 1;
