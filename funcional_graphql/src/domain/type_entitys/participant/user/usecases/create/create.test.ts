// deno-lint-ignore-file valid-typeof

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { UserArgs, UserModel } from "../../editables/contracts.ts";
import { executeCreateUser } from "./create.ts";
import { createEntityUser } from "../../factory_model/factory_model.ts";
import { fallbackArgsUser1 } from "../../uses/fallback_args.ts";

type MakeSutType = { sutEntity: UserModel; sutExecute: UserModel };

const makeSut = (a: UserArgs): MakeSutType => {
  return {
    sutEntity: createEntityUser(a),
    sutExecute: executeCreateUser(a),
  };
};

type MakeInputType = { inputArgsUser1: UserArgs };

const makeInput = (): MakeInputType => {
  return {
    inputArgsUser1: fallbackArgsUser1,
  };
};

Deno.test("[ entity ] deve ser instancia de User", () => {
  const { inputArgsUser1 } = makeInput();
  const { sutEntity } = makeSut(inputArgsUser1);
  const actual = typeof sutEntity;

  console.log("TEST {{ sutEntity } >>>  ", sutEntity);
  // console.log("TEST {{ sutEntity - TYPEOF ****}} >>>  ", typeof sutEntity);

  expect(actual).toEqual(actual);
});

Deno.test("[ Execute ] deve conter todas as props de User", () => {
  const { inputArgsUser1 } = makeInput();
  const { sutExecute } = makeSut(inputArgsUser1);

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
