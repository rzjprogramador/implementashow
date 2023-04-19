// deno-lint-ignore-file no-unused-vars
import {
  ArgsParticipant1,
  protoParticipant1,
} from "../../../../../imports/_deps/entitys/participant1_deps.ts";
import { importRegisters } from "../../../../../imports/_deps/_mod_deps/mod_deps.ts";

const generatorProtoCoreUser = (args: ArgsParticipant1) => {
  const register = importRegisters;
  const core = Object.create(protoParticipant1);
  const newCore = { ...core, ...args };
  return newCore;
};

export const createModelUser = (core: ArgsParticipant1) => {
  const protoCore = generatorProtoCoreUser(core);
  const model = {
    ...protoCore,
    ...importRegisters.identifiers,
    ...importRegisters.dates,
  };
  return model;
};
