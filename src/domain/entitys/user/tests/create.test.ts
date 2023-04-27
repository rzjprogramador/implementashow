// deno-lint-ignore-file valid-typeof
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { userProduction } from "../../../../global/production/user_production.ts";
import { UserArgs, UserModel } from "../dynamic/contracts.ts";
import { createEntityUser } from "../factory/entity.ts";
import { executeCreateUser } from "../usecases/create/create.ts";
import { fakesUser } from "../uses/fakes.ts";
import { userRepositoryMemory } from "../../../../../memory/repositories/userRepositoryMemory.ts";

// execute foi mockado : somente para salvar no repo de testers
const repositoryTesterUser = userRepositoryMemory;

// todo: usar somente antes de criar o de producao real - remover depois : #TEMPORARIO-TEST
const repositoryProductionUser = userProduction.repository;

// utils test
const cleanItemsRepoMock = () => repositoryTesterUser._items = [];

// rodar no final de cada test
const runFinallyTesters = () => cleanItemsRepoMock();

type MakeSutType = { sutEntity: UserModel; sutExecute: UserModel };

const makeSut = (a: UserArgs): MakeSutType => {
  return {
    sutEntity: createEntityUser(a),
    sutExecute: executeCreateUser(a),
  };
};

type MakeInputType = { inputArgsUser1: UserArgs; inputArgsUser2: UserArgs };

const makeInput = (): MakeInputType => {
  return {
    inputArgsUser1: fakesUser.args1,
    inputArgsUser2: fakesUser.args2,
  };
};

Deno.test("[ entity ] deve ser instancia de User", () => {
  const { inputArgsUser1 } = makeInput();
  const { sutEntity } = makeSut(inputArgsUser1);
  const actual = typeof sutEntity;

  // console.log("TEST {{ sutEntity } >>>  ", sutEntity);
  // console.log("TEST {{ sutEntity - TYPEOF ****}} >>>  ", typeof sutEntity);

  expect(actual).toEqual(actual);

  runFinallyTesters();
});

Deno.test("[ Execute ] deve conter todas as props de User", () => {
  const { inputArgsUser1 } = makeInput();
  const { sutExecute } = makeSut(inputArgsUser1);

  console.log("TEST {{ Execute User }} >>>  ", sutExecute);

  expect(sutExecute).toHaveProperty("primeiroNome");
  expect(sutExecute).toHaveProperty("texto");
  expect(sutExecute).toHaveProperty("numeroInteiro");
  expect(sutExecute).toHaveProperty("ID");
  expect(sutExecute).toHaveProperty("IDB");
  expect(sutExecute).toHaveProperty("createdAt");
  expect(sutExecute).toHaveProperty("updatedAt");
  expect(sutExecute).toHaveProperty("deletedAt");

  runFinallyTesters();
});

Deno.test("[ Repository User ] deve gravar somente no repositorio in memoria e nada no producao neste test", () => {
  const { inputArgsUser1 } = makeInput();
  const { inputArgsUser2 } = makeInput();

  executeCreateUser(inputArgsUser1, repositoryTesterUser);
  executeCreateUser(inputArgsUser2, repositoryTesterUser);

  // console.log(repositoryTesterUser.list());

  // console.log(
  //   "#TEMPORARIO-TEST : REPO EM PRODUCAO TEM QUE ESTAR ZERADO >> ",
  //   repositoryProductionUser.list(),
  // );

  const actualLength = repositoryTesterUser._items?.length;

  expect(actualLength).toEqual(2);

  runFinallyTesters();
});
