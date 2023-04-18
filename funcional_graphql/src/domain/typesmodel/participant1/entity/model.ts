// deno-lint-ignore-file no-unused-vars
import { ArgsParticipant1, protoParticipant1 } from "./../../../../dev_deps.ts";
import { importRegisters } from "./../../../../deps.ts";

const createArgsProtoParticipant1 = (args: ArgsParticipant1) => {
  const register = importRegisters;
  const core = Object.create(protoParticipant1);
  core.texto = args.texto;
  core.numeroInteiro = args.numeroInteiro;
  return core;
};

export const createModelParticipant1 = (core: ArgsParticipant1) => {
  const entity = createArgsProtoParticipant1(core);
  const model = {
    ...entity,
    ...importRegisters.identifiers,
    ...importRegisters.dates,
  };
  return model;
};
