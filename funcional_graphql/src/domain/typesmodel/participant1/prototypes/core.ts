// deno-lint-ignore-file no-unused-vars
import { useObjRegister } from "../../../utils/point_unique/modules_git.ts";
import { participant1CoreFN } from "../editables/contracts.ts";
import { protoParticipant1 } from "./members.ts";

export const participant1Core: participant1CoreFN = (args) => {
  const register = useObjRegister;
  const core = Object.create(protoParticipant1);
  core.texto = args.texto;
  core.numeroInteiro = args.numeroInteiro;

  core.ID = register.identifiers.ID;
  core.IDB = register.identifiers.IDB;
  core.createdAt = register.dates.createdAt;
  core.updatedAt = register.dates.updatedAt;
  core.deletedAt = register.dates.deletedAt;
  core.foo = "foo";

  return core;
};
