// deno-lint-ignore-file no-unused-vars
import { participant1CoreFN } from "../editables/contracts.ts";
import { protoParticipant1 } from "./members.ts";

export const participant1Core: participant1CoreFN = (a) => {
  const core = Object.create(protoParticipant1);
  core.texto = a.texto;
  core.numeroInteiro = a.numeroInteiro;
  return core;
};
