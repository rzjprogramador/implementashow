import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { controllerCreateClienteFisico } from "./controller.ts";
import { literalListClienteFisicoArgsOK } from "../../../../data/unique/clienteFisico/literals/literals.ts";
import { Log } from "../../../../app/dataApp/imports/mod_deps.ts";

const sut = controllerCreateClienteFisico;
const inputOK = literalListClienteFisicoArgsOK[0];

Deno.test("deve retornar a criacao OK do model user_fisico com todas as propriedades.", async () => {
  const input = inputOK;
  const actual = await sut(input);

  expect(actual.statusCode).toBe(200);
  expect(actual.data).toHaveProperty("id");
  expect(actual.data).toHaveProperty("primeiroNome");
  expect(actual.data).toHaveProperty("sobrenome");
  expect(actual.data).toHaveProperty("email");
  expect(actual.data).toHaveProperty("dataNascimento");
  expect(actual.data).toHaveProperty("tipoUser");
  expect(actual.data).toHaveProperty("tipoUser");
  expect(actual.data).toHaveProperty("endereco");
});

/* TESTER_CONSOLE ************************************* */

function show_controllerCreateClienteFisico() {
  sut(inputOK)
    .then((d) => Log(d))
    .catch((err) => Log(err.message));
}
// show_controllerCreateClienteFisico();

export default 1;
