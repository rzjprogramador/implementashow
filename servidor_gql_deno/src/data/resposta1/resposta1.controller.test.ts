import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createResposta1Controller } from "./resposta1.controller.ts";
import { ArgsResposta1 } from "../../domain/entitys/resposta1/editables/contract/contracts.resposta1.ts";

const makeSut = (d: ArgsResposta1) => {
  return {
    sut1: createResposta1Controller(d),
  };
};

Deno.test("[ resposta1 controller ] deve retornar o objeto requerido em resposta1", () => {
  const input1 = { texto: "foo texto 1" };
  const { sut1 } = makeSut(input1);

  const actual = input1;

  console.log("TEST {{ sut1 }} >>>  ", sut1);

  expect(sut1).toEqual(actual);
});
