import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { prepareCreateResposta1 } from "./resposta1.core.ts";
import { ArgsResposta1 } from "../editables/resposta1.contracts.ts";

const makeSut = (d: ArgsResposta1) => {
  return {
    sut1: prepareCreateResposta1(d),
  };
};

Deno.test("[ resposta1 >> prepare ] deve retornar o objeto prepare de resposta1", () => {
  const input1 = { texto: "foo texto 1" };
  const { sut1 } = makeSut(input1);

  const actual = input1;

  console.log("TEST {{ sut1 }} >>>  ", sut1);

  expect(sut1.args).toEqual(actual);
});
