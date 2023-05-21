// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { UserFisicoArgs, UserFisicoModel } from "../../../contracts.ts";
import { controllerCreateUserFisico } from "./controller.ts";
import { fakeListUserFisicoArgsOK } from "../../../../../../data/literals/user_fisico/fake.ts";
import { HttpResponse } from "../../../../../../../global/helpers/httpResponse.ts";

type MakeSutControllerUserFisico = (d: UserFisicoArgs) => {
  sut: HttpResponse
};

const makeSut: MakeSutControllerUserFisico = (d) => {
  return {
    sut: controllerCreateUserFisico(d),
  };
};

const inputOK = fakeListUserFisicoArgsOK[0]

Deno.test("[ OK >> ... ] deve retornar as props corretas da criacao OK", () => {
  const input = inputOK;
  const { sut } = makeSut(input);
  const actual = sut;
  // const assertion: any = "foo";
  console.log("LOG {{ ACTUAL }} >>>  ", actual);

  expect(actual.statusCode).toBe(200);
  expect(actual.data).toHaveProperty('id');
  expect(actual.data).toHaveProperty('primeiroNome');
  expect(actual.data).toHaveProperty('sobrenome');
  expect(actual.data).toHaveProperty('email');
  expect(actual.data).toHaveProperty('dataNascimento');
  expect(actual.data).toHaveProperty('tipoUser');
  expect(actual.data).toHaveProperty('endereco');
});

/* TESTER_CONSOLE ************************************* */

function show_controllerCreateUserFisico() {
  const { sut } = makeSut(inputOK);
  console.log(sut);
}
show_controllerCreateUserFisico();

export default 1;
