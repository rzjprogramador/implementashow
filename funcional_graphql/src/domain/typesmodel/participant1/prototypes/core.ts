// deno-lint-ignore-file no-unused-vars
import { importRegisters } from "./../../../../deps.ts";
import { participant1CoreFN } from "./../../../../deps.ts";
import { protoParticipant1 } from "./../../../../deps.ts";

export const participant1Core: participant1CoreFN = (args) => {
  // const register = useObjRegister;
  const register = importRegisters;
  const core = Object.create(protoParticipant1);
  core.texto = args.texto;
  core.numeroInteiro = args.numeroInteiro;

  core.ID = register.identifiers.ID;
  core.IDB = register.identifiers.IDB;
  core.createdAt = register.dates.createdAt;
  core.updatedAt = register.dates.updatedAt;
  core.deletedAt = register.dates.deletedAt;
  // core.foo = "foo"; // TODO NAO PERMITIR ESTE CAMPO

  return core;
};
