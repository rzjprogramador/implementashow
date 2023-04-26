// deno-lint-ignore-file valid-typeof

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { UserArgs } from "../editables/contracts.ts";
import { ExecuteUser } from "./execute.ts";

const makeSut = (a: UserArgs) => {
  return {
    sutExecute: ExecuteUser(a),
  };
};

Deno.test("[ Execute User ] deve conter todas as props", () => {
  const inputArgs1: UserArgs = {
    primeiroNome: "reinaldo",
    texto: "foo texto 1",
    numeroInteiro: 10,
  };
  const { sutExecute } = makeSut(inputArgs1);

  console.log("TEST {{ Execute User }} >>>  ", sutExecute);

  expect(sutExecute).toHaveProperty("primeiroNome");
  expect(sutExecute).toHaveProperty("texto");
  expect(sutExecute).toHaveProperty("numeroInteiro");
  expect(sutExecute).toHaveProperty("ID");
  expect(sutExecute).toHaveProperty("IDB");
  expect(sutExecute).toHaveProperty("createdAt");
  expect(sutExecute).toHaveProperty("updatedAt");
  expect(sutExecute).toHaveProperty("deletedAt");
});
