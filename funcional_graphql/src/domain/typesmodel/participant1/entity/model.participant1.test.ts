// deno-lint-ignore-file valid-typeof

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createModelParticipant1 } from "./model.ts";
import { ArgsParticipant1 } from "../editables/contracts.ts";

const makeSut = (a: ArgsParticipant1) => {
  return {
    sutCore: createModelParticipant1(a),
  };
};

Deno.test("[ core entity participant1 ] deve conter estas props no obj > core do participant1", () => {
  const inputArgs1 = { texto: "foo texto 1", numeroInteiro: 10 };
  const { sutCore } = makeSut(inputArgs1);

  // console.log("TEST {{ SUTCORE }} >>>  ", sutCore);

  expect(sutCore).toHaveProperty("texto");
  expect(sutCore).toHaveProperty("numeroInteiro");
  expect(sutCore).toHaveProperty("ID");
  expect(sutCore).toHaveProperty("IDB");
  expect(sutCore).toHaveProperty("createdAt");
  expect(sutCore).toHaveProperty("updatedAt");
  expect(sutCore).toHaveProperty("deletedAt");
  // TODO TESTAR PARA NAO TER OUTRAS PROPS QUE NAO SEJA A DO CONTRATO
});

Deno.test("[ core participant1 ] deve ser instancia de Participant1Model", () => {
  const inputArgs1 = { texto: "foo texto 1", numeroInteiro: 10 };
  const { sutCore } = makeSut(inputArgs1);

  const actual = typeof sutCore;

  // console.log("TEST {{ SUTCORE - TYPEOF ****}} >>>  ", typeof sutCore);

  expect(actual).toEqual(actual);
});
