// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { UserFisicoArgs } from "../../../contracts.ts";
import { controllerCreateUserFisico } from "./controller.ts";
import { fakeListUserFisicoArgsOK } from "../../../../../../data/literals/user_fisico/fake.ts";
import { HttpResponse } from "../../../../../../../global/helpers/httpResponse.ts";

const sut = controllerCreateUserFisico;

const inputOK = fakeListUserFisicoArgsOK[0];

Deno.test("[ OK >> ... ] deve retornar as props corretas da criacao OK", async () => {
  const input = inputOK;
  const actual = await sut(input);

  expect(actual.statusCode).toBe(200);
  expect(actual.data).toHaveProperty("id");
  expect(actual.data).toHaveProperty("primeiroNome");
  expect(actual.data).toHaveProperty("sobrenome");
  expect(actual.data).toHaveProperty("email");
  expect(actual.data).toHaveProperty("dataNascimento");
  expect(actual.data).toHaveProperty("tipoUser");
  expect(actual.data).toHaveProperty("endereco");
});

/* TESTER_CONSOLE ************************************* */

function show_controllerCreateUserFisico() {
  console.log(sut(inputOK));
}
show_controllerCreateUserFisico();

export default 1;
