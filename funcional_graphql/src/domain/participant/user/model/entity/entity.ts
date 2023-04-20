import {
  ArgsParticipant1,
  protoParticipant1,
} from "../../../../../../imports/_deps/entitys/participant1_deps.ts";
import { importRegisters } from "../../../../../../imports/_deps/_mod_deps/mod_deps.ts";

const generatorPrototypeAndRegisterArgsUser = (args: ArgsParticipant1) => {
  const prototype = Object.create(protoParticipant1);
  const newCore = { ...prototype, ...args };
  return newCore;
};

export const createEntityUser = (core: ArgsParticipant1) => {
  const protoCore = generatorPrototypeAndRegisterArgsUser(core);
  const model = {
    ...protoCore,
    ...importRegisters.identifiers,
    ...importRegisters.dates,
  };
  return model;
};
