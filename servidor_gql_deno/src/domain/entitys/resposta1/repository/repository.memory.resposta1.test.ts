import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { saveCreateResposta1 } from "../core/resposta1.core.ts";
import { TypeResposta1 } from "../editables/resposta1.contracts.ts";

const makeSut = (d: TypeResposta1) => {
  return {
    whereSave: saveCreateResposta1(d),
  };
};

Deno.test("[ resposta1 >> save - Repo Memory ] deve retornar o objeto prepare de resposta1", () => {
  const input1 = { texto: "foo" };
  const { whereSave } = makeSut(input1);

  const actual = input1;

  console.log("TEST {{ whereSave }} >>>  ", whereSave);

  expect(whereSave).toEqual(actual);
});
