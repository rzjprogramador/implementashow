// deno-lint-ignore-file valid-typeof

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { UserArgs } from "../../editables/contracts.ts";
import { executeCreateUser } from "./create.ts";
import { createEntityUser } from "../../factory_model/factory_model.ts";

const makeSut = (a: UserArgs) => {
  return {
    sutEntity: createEntityUser(a),
    sutExecute: executeCreateUser(a),
  };
};

Deno.test("[ entity ] deve ser instancia de User", () => {
  const inputArgs1: UserArgs = {
    primeiroNome: "reinaldo",
    texto: "foo texto 1",
    numeroInteiro: 10,
  };
  const { sutEntity } = makeSut(inputArgs1);

  const actual = typeof sutEntity;

  console.log("TEST {{ sutEntity } >>>  ", sutEntity);
  // console.log("TEST {{ sutEntity - TYPEOF ****}} >>>  ", typeof sutEntity);

  expect(actual).toEqual(actual);
});

Deno.test("[ Execute ] deve conter todas as props de User", () => {
  const inputArgs1: UserArgs = {
    primeiroNome: "reinaldo",
    texto: "foo texto 1",
    numeroInteiro: 10,
  };
  const { sutExecute } = makeSut(inputArgs1);

  // console.log("TEST {{ Execute User }} >>>  ", sutExecute);

  expect(sutExecute).toHaveProperty("primeiroNome");
  expect(sutExecute).toHaveProperty("texto");
  expect(sutExecute).toHaveProperty("numeroInteiro");
  expect(sutExecute).toHaveProperty("ID");
  expect(sutExecute).toHaveProperty("IDB");
  expect(sutExecute).toHaveProperty("createdAt");
  expect(sutExecute).toHaveProperty("updatedAt");
  expect(sutExecute).toHaveProperty("deletedAt");
});
