// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { ILogPerson, logPerson } from "./index.ts";

const sut = logPerson;
const inputAtividade: ILogPerson = {
  atividade: "criacão de cliente_fisico",
};

const authorNameCompleted = 'authorNomeAny sobrenomeAny'

Deno.test("nao deve retornar props falsy no objeto logUser", () => {
  const actual = sut(inputAtividade, authorNameCompleted);

  expect(actual).toHaveProperty("atividade");
  expect(actual).toHaveProperty("author");
  expect(actual).toHaveProperty("data");

  expect(actual.atividade).toBeTruthy();
  expect(actual.author).toBeTruthy();
  expect(actual.data?.dia).toBeTruthy();
  expect(actual.data?.mes).toBeTruthy();
  expect(actual.data?.ano).toBeTruthy();
  expect(actual.data?.horario).toBeTruthy();
});

/* TESTER_CONSOLE ************************************* */

function show_logAtividade() {
  const actual = sut(inputAtividade, authorNameCompleted);
  console.log(actual);
}
show_logAtividade();

export default 1;
