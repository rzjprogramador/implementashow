import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { participant1Core } from "./core.ts";
import { ArgsParticipant1 } from "../editables/contracts.ts";

const makeSut = (a: ArgsParticipant1) => {
  return {
    sutCore: participant1Core(a),
  };
};

Deno.test("[ core participant1 ] deve retornar o core do participant1", () => {
  const input1 = { texto: "foo texto 1", numeroInteiro: 10 };
  const { sutCore } = makeSut(input1);

  const actual = input1;

  console.log("TEST {{ ACTUAL }} >>>  ", actual);

  expect(sutCore).toEqual(actual);
});
