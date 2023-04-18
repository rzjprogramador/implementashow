// deno-lint-ignore-file no-unused-vars
import {
  ArgsParticipant1,
  protoParticipant1,
} from "../../../../_deps/entitys/participant1_deps.ts";
import { importRegisters } from "../../../../_deps/_mod_deps/mod_deps.ts";

const createCoreParticipant1 = (args: ArgsParticipant1) => {
  const register = importRegisters;
  const core = Object.create(protoParticipant1);
  core.texto = args.texto;
  core.numeroInteiro = args.numeroInteiro;
  return core;
};

export const createModelParticipant1 = (core: ArgsParticipant1) => {
  const entity = createCoreParticipant1(core);
  const model = {
    ...entity,
    ...importRegisters.identifiers,
    ...importRegisters.dates,
  };
  return model;
};
