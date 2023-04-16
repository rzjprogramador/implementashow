import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { TypeO1Model } from "../create/editables/contract/contracts.typeO1.ts";
import { saveCreateTypeO1 } from "../create/core/c.save.typeO1.ts";

const makeSut = (d: TypeO1Model) => {
  return {
    whereSave: saveCreateTypeO1(d),
  };
};

Deno.test("[ resposta1 >> save - Repo Memory ] deve retornar o objeto prepare de resposta1", () => {
  const input1 = { texto: "foo" };
  const { whereSave } = makeSut(input1);

  const actual = input1;

  console.log("TEST {{ whereSave }} >>>  ", whereSave);

  expect(whereSave).toEqual(actual);
});
