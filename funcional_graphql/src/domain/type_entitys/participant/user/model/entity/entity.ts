import {
  protoParticipant1,
  UserArgs,
} from "../../../../../../../imports/_deps/entitys/participant1_deps.ts";
import { importRegisters } from "../../../../../../../imports/_deps/_mod_deps/mod_deps.ts";

const userFactoryByArgs = (args: UserArgs) => {
  const prototype = Object.create(protoParticipant1);
  const newCore = { ...prototype, ...args };
  return newCore;
};

export const createEntityUser = (factory: UserArgs) => {
  const protoCore = userFactoryByArgs(factory);
  const model = {
    ...protoCore,
    ...importRegisters.identifiers,
    ...importRegisters.dates,
  };
  return model;
};
