import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { ArgsTypeO1 } from "../contract/contracts.typeO1.ts";
import { prepareCreateTypeO1 } from "./b.prepare.typeO1.ts";

const makeSut = (d: ArgsTypeO1) => {
  return {
    sut1: prepareCreateTypeO1(d),
  };
};

Deno.test("[ resposta1 >> prepare ] deve retornar o objeto prepare de resposta1", () => {
  const input1 = { texto: "foo texto 1" };
  const { sut1 } = makeSut(input1);

  const actual = input1;

  console.log("TEST {{ sut1 }} >>>  ", sut1);

  expect(sut1).toEqual(actual);
});
